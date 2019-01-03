import { UbisoftCreditionals, AuthService } from "./Auth";
import { APIService } from "./API";
import * as Errors from './errors'
import * as Types from './Types'

export { APIService } from './API'
export { UbisoftCreditionals, AuthService } from "./Auth";

export class RainbowSixAPI {
    readonly auth: AuthService
    readonly api: APIService
    readonly errors: Errors.UbisoftErrors

    constructor(creds: UbisoftCreditionals) {
        this.auth = new AuthService(creds)
        this.api = new APIService(this.auth)
        this.errors = Errors
    }

}

export const UbisoftTypes = Types