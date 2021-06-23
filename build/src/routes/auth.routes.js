"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
// import { login, signIn } from '../controllers/auth.controller';
const auth_controller_1 = require("../controllers/auth.controller");
class AuthRoutes {
    constructor() {
        this.router = express_1.Router();
        this.router.post('/signin', auth_controller_1.authController.index);
        this.router.post('/login', auth_controller_1.authController.login);
    }
}
exports.authRoutes = new AuthRoutes();
