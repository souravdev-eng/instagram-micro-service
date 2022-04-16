import { BaseError } from "./baseError";
export declare class BadRequestError extends BaseError {
    message: string;
    statusCode: number;
    constructor(message: string);
    errorResponse(): {
        message: string;
    }[];
}
