"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseErrors = exports.responseSuccess = void 0;
const responseSuccess = (res, status, message) => res.status(status).json({
    success: true,
    message,
});
exports.responseSuccess = responseSuccess;
const responseErrors = (res, status, message) => res.status(status).json({
    success: false,
    error: "INVALID_EMAIL_ADDRESS",
    is_available: false,
    message,
});
exports.responseErrors = responseErrors;
