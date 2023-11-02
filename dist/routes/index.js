"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const multer_1 = __importDefault(require("multer"));
const middleware_1 = require("../middleware");
const responses_1 = require("../helpers/responses");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)();
router.post("/sendemail", [
    upload.any(),
    (0, express_validator_1.check)("email", "Please use a valid email address.").isEmail(),
    middleware_1.validateFields,
], (req, res) => {
    return (0, responses_1.responseSuccess)(res, 200, "Form sent and saved successfully");
});
router.get("/", (req, res) => {
    res.render("index", {
        title: "Express",
        h1Title: "Hi there!",
        h2Title: "please visit http://localhost:" +
            process.env.PORT +
            "/sendemail via Post.",
        content: "",
    }, function (err, html) {
        console.log(err);
    });
});
exports.default = router;
