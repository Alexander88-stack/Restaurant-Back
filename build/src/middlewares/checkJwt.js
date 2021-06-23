"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_json_1 = __importDefault(require("../config/config.json"));
const checkJwt = (req, res, next) => {
    // coger el token del request
    const token = req.headers["authorization"];
    try {
        jsonwebtoken_1.default.verify(token, config_json_1.default.jwtSecret);
    }
    catch (error) {
        res.sendStatus(401);
    }
    next();
};
exports.checkJwt = checkJwt;
