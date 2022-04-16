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
exports.__esModule = true;
exports.BadRequestError = void 0;
var baseError_1 = require("./baseError");
var BadRequestError = /** @class */ (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(message) {
        var _this = _super.call(this, "Bad request error") || this;
        _this.message = message;
        _this.statusCode = 400;
        Object.setPrototypeOf(_this, BadRequestError.prototype);
        return _this;
    }
    BadRequestError.prototype.errorResponse = function () {
        return [{ message: this.message }];
    };
    return BadRequestError;
}(baseError_1.BaseError));
exports.BadRequestError = BadRequestError;
