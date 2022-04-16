"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
var baseError_1 = require("./baseError");
var RequestValidationError = /** @class */ (function (_super) {
    __extends(RequestValidationError, _super);
    function RequestValidationError(error) {
        var _this = _super.call(this, "Request validation error") || this;
        _this.error = error;
        _this.statusCode = 400;
        return _this;
    }
    RequestValidationError.prototype.errorResponse = function () {
        return this.error.map(function (err) {
            return { message: err.msg, field: err.param };
        });
    };
    return RequestValidationError;
}(baseError_1.BaseError));
exports.RequestValidationError = RequestValidationError;