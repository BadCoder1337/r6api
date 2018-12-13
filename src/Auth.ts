import { URLS } from './constants'
import * as Errors from './errors'
import fetcher from './fetch'

export interface UbisoftAuthData {
    token: string,
    ticket: string,
    expiration: string
}


export type UbisoftCreditionals = {
    email: string,
    password: string
}

let LOGIN_TIMEOUT: NodeJS.Timer

export class AuthService {

    private CurrentLoggedInUser: UbisoftAuthData | null
    private creds: UbisoftCreditionals | null

    constructor(creds: UbisoftCreditionals) {

        if (!this.creds.email || !this.creds.password) {
            throw new Errors.MissingCredentialsError();
        }

        this.creds = creds
    }

    /**
     * Login user and save Auth data of ubisoft account
     * This function is not rate limited and should be called only internally
     * if you log in to often your account will get blocked by Ubisoft
     * 
     * @param creds Ubisoft Account Creditinals
     */
    async login(): Promise<UbisoftAuthData> {

        if (this.CurrentLoggedInUser) {
            const expiration = new Date(this.CurrentLoggedInUser.expiration).getTime() - Date.now() - 10 * 60 * 1000;
            if (expiration > 0) {
                LOGIN_TIMEOUT = setTimeout(this.login, expiration);
                return this.CurrentLoggedInUser
            }
        }

        const token =
            `Basic ${new Buffer(this.creds.email + ':' + this.creds.password, 'utf8').toString('base64')}`

        const res: UbisoftAuthData | Error = await fetcher<UbisoftAuthData>(
            URLS.PC.LOGIN_URL,
            {
                method: "POST",
                body: JSON.stringify({ rememberMe: true })
            },
            token,
        )

        if (res instanceof Error) {
            throw res
        }

        if (res && res.ticket && res.expiration) {
            this.CurrentLoggedInUser = res
            const expiration = new Date(res.expiration).getTime() - Date.now() - 10 * 60 * 1000;
            LOGIN_TIMEOUT = setTimeout(this.login, expiration)
            return this.login()
        } else {
            clearTimeout(LOGIN_TIMEOUT)
            throw new Errors.UnknownAuthError('auth error')
        }

    }


    /**
     * Returns a Promise with valid token
     */
    async getAuthToken(): Promise<string> {
        if (this.CurrentLoggedInUser &&
            this.CurrentLoggedInUser.expiration &&
            this.CurrentLoggedInUser.ticket &&
            new Date(this.CurrentLoggedInUser.expiration) > new Date
        ) {
            return this.CurrentLoggedInUser.ticket
        } else {
            await this.login()
            return this.CurrentLoggedInUser.ticket
        }
    }

    /**
     * Returns a Promise with value for Authorization header
     */
    async getAuthString(): Promise<string> {
        const token = await this.getAuthToken()
        return `Ubi_v1 t=${token}`
    }
}
