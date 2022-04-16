"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidation = void 0;
var express_validator_1 = require("express-validator");
var requestValidation_1 = require("../errors/requestValidation");
var requestValidation = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return next(new requestValidation_1.RequestValidationError(errors.array()));
    }
    next();
};
exports.requestValidation = requestValidation;
