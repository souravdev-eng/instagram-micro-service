import { BaseError } from "./baseError";

export class NotFoundError extends BaseError {
  statusCode = 404;
  constructor(public message: string) {
    super("Not found");
  }

  errorResponse() {
    return [{ message: this.message }];
  }
}
