export declare abstract class BaseError extends Error {
    abstract statusCode: number;
    constructor(message: string);
    abstract errorResponse(): {
        message: string;
        field?: string;
    }[];
}
