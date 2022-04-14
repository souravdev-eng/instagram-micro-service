export abstract class BaseError extends Error {
  abstract statusCode: number;
  constructor(message: string) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
  abstract errorResponse(): { message: string; field?: string }[];
}
