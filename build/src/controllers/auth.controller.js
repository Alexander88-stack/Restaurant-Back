"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const config_json_1 = __importDefault(require("../config/config.json"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_model_1 = require("../models/users.model");
class AuthController {
    async index(req, res) {
        try {
            const checkUser = await users_model_1.User.findAll({
                where: {
                    username: req.body.username,
                    mail: req.body.mail,
                    password: req.body.password
                }
            });
            if (checkUser.length !== 0) {
                const token = jsonwebtoken_1.default.sign({
                    username: req.body.username,
                    mail: req.body.mail,
                    password: req.body.password,
                }, config_json_1.default.jwtSecret, { expiresIn: "1h" });
                res.send(token);
            }
        }
        catch (error) {
            res.sendStatus(404);
        }
    }
    // Aqui mas abajo hare la prueba del login
    // SEGUNDA PRUEBA
    //    login(req: any, res: any) {
    //     req.checkBody('email', 'Enter a valid email address.').isEmail().isLength({ min: 3 , max: 100 })
    //     req.checkBody('password', 'Password should be at least 6 chars long.').isLength({ min: 6 })
    //     req.condition = {where: {email: req.body.email}}
    //     return super._findOne(req , res,  data => {
    //       if (data.authenticate(req.body.password))
    //         return res.status(200).send({success: true, data: data, token: data.generateToken(), message: 'Congrats! You have Successfully login'})
    //       else
    //         return res.status(401).send({success: false, errors: [{message: 'Authentication failed. Wrong Password or email.'}]})
    //     })
    //   }
    // }
    // PRIMERA PRUEBA
    async login(req, res) {
        if (!req.body.mail || !req.body.password) {
            return res.status(400).json({ msg: 'Please, send your email and password' });
        }
        const user = await users_model_1.User.findOne();
        console.log(user);
        if (!user) {
            return res.status(400).json({ msg: 'The user does not exist' });
        }
        return res.status(400).json({
            msg: 'The mail or password are incorrect'
        });
    }
}
exports.authController = new AuthController();
