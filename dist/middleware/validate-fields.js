"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFields = void 0;
const express_validator_1 = require("express-validator");
const responses_1 = require("../helpers/responses");
const validateFields = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return (0, responses_1.responseErrors)(res, 400, `${errors.array().map((error) => {
            return error.msg;
        })}`);
    }
    next();
};
exports.validateFields = validateFields;
