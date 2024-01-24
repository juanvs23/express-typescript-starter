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
exports.getNeighborhood = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const getNeighborhood = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const url = process.env.VITE_DEV_URL_NEIGHBORHOODS || "";
    // console.log(req.headers.authorization);
    const response = yield (0, node_fetch_1.default)(url, {
        body: JSON.stringify(req.body),
        headers: {
            "Content-Type": "application/json",
            Authorization: req.headers.authorization || "",
        },
        method: "POST",
    });
    const data = yield response.json();
    return res.status(200).json(data);
});
exports.getNeighborhood = getNeighborhood;
