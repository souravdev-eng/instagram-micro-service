import { ValidationError } from "express-validator";
import { BaseError } from "./baseError";

export class RequestValidationError extends BaseError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super("Request validation error");
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  errorResponse() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.param };
    });
  }
}
