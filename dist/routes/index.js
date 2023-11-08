"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const fetch_api_1 = require("../controller/fetch-api");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)();
router.post("/sendemail", [
    upload.any(),
    // check("email", "Please use a valid email address.").isEmail(),
    // validateFields,
], fetch_api_1.fetchApi);
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
