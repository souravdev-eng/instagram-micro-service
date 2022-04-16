import { BaseError } from "./baseError";

export class BadRequestError extends BaseError {
  statusCode = 400;
  constructor(public message: string) {
    super("Bad request error");
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  errorResponse() {
    return [{ message: this.message }];
  }
}
