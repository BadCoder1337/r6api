import nodeFetch from 'node-fetch';
import * as Errors from './errors';

interface IUbiError {
    httpCode: number;
    errorCode: number;
    message: string;
}

export default async function fetch<T>(
    url: string,
    params: any,
    token: string,
): Promise<T> {
    const opts = Object.assign(
        {},
        {
            method: 'GET',
            headers: {
                'Ubi-AppId': '39baebad-39e5-4552-8c25-2c9b919064e2',
                'Content-Type': 'application/json; charset=UTF-8',
                Authorization: token,
            },
        },
        params || {},
    );

    const res = await nodeFetch(url, opts);
    const json = await res.json();

    if (res.status !== 200) {
        const r = json as IUbiError;
        switch (r.httpCode) {
            case 429:
                throw new Errors.TooManyRequestsError();
            case 400:
                throw new Errors.BadRequestError(r.message || r.errorCode.toString());
            default:
                break;
        }
        // after that the known error codes
        switch (r.errorCode) {
            case 1:
                throw new Errors.MissingHeaderError(r.message);
            case 2:
                throw new Errors.MissingCredentialsError();
            case 3:
                throw new Errors.MissingHeaderError(r.message);
            case 3:
                throw new Errors.InvalidCredentialsError();
            case 1101:
                throw new Errors.TooManyRequestsError();
            case 1100:
                throw new Errors.TooManyRequestsError();
            default:
                throw new Errors.UnknownAuthError(r.message || r.errorCode.toString());
        }
    } else {
        return json as T;
    }
}
