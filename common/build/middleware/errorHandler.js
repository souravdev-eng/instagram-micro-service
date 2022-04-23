"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var baseError_1 = require("../errors/baseError");
var errorHandler = function (err, req, res, next) {
    console.log(err);
    if (err instanceof baseError_1.BaseError) {
        return res.status(err.statusCode).send({ errors: err.errorResponse() });
    }
    res.status(500).send({ errors: [{ message: "Something went wrong" }] });
};
exports.errorHandler = errorHandler;
