import { ValidationError } from "express-validator";
import { BaseError } from "./baseError";
export declare class RequestValidationError extends BaseError {
    errors: ValidationError[];
    statusCode: number;
    constructor(errors: ValidationError[]);
    errorResponse(): {
        message: any;
        field: string;
    }[];
}
