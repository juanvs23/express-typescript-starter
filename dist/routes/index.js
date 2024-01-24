"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const multer_1 = __importDefault(require("multer"));
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)();
router.post("/sendemail", [
    upload.any(),
    (0, express_validator_1.check)("email", "Please use a valid email address.").isEmail(),
    middleware_1.validateFields,
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phone, ib_tags, action, message } = req.body;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("ib_tags", ib_tags);
    formData.append("action", action);
    formData.append("message", JSON.stringify(message));
    const response = yield fetch("https://newsluxlifedev.wpengine.com/wp-admin/admin-ajax.php", {
        method: "POST",
        body: formData,
    });
    const data = yield response.json();
    console.log(data);
    return res.status(200).json(data);
}));
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
