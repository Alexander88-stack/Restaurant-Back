"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const users_model_1 = require("../models/users.model");
class UsersController {
    async index(req, res) {
        try {
            const users = await users_model_1.User.findAll({ raw: true });
            const usersId = await users_model_1.User.findByPk(req.params.id, { raw: true });
            res.send(usersId);
        }
        catch (error) {
            res.sendStatus(500);
        }
    }
    show(req, res) {
        users_model_1.User.findAll()
            .then((users) => {
            console.log(users);
        })
            .catch((error) => {
            console.log(error);
        });
        res.send('Ok');
    }
    async create(req, res) {
        try {
            const request = req.body;
            const newUser = await users_model_1.User.create(request);
            res.json(newUser);
        }
        catch (error) {
            res.json(error);
        }
    }
    async delete(req, res) {
        try {
            const users = await users_model_1.User.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.sendStatus(200);
        }
        catch (error) {
            res.json(error);
        }
    }
    async update(req, res) {
        try {
            const users = await users_model_1.User.update({
                username: req.body.username,
                mail: req.body.mail,
                password: req.body.password,
            }, {
                where: {
                    id: req.params.id
                }
            });
            res.json(users);
        }
        catch (error) {
            res.json(error);
        }
    }
}
;
exports.usersController = new UsersController();
// function createToken(user: User) {
//    return jwt.sign({id: user.id, mail: user.mail, username: user.username}, config.jwtSecret, {
//        expiresIn: 86400
//    });
// }
// export const signIn = async (req: Request, res: Response): Promise<Response> => {
//     if (!req.body.mail || !req.body.password || !req.body.username) {
//         return res.status(400).json({msg: 'Please, send your email and password'})
//     }
//   const user = await  User.findByPk( req.body.mail );
//   if(user) {
//       return res.status(400).json({msg: 'The user already exist'});
//   }
//    const newUser =  new User(req.body);
//    await newUser.save();
//    return res.status(201).json(newUser);
// }
// export const logIn =  async (req: Request, res: Response,) => {
//     if (!req.body.mail || !req.body.password || !req.body.username) {
//         return res.status(400).json({msg: 'Please, send your email and password'})
//     }
//   const user = await  User.findByPk( req.body.mail )
//      console.log(user);
//   if (!user) {
//       return res.status(400).json({msg: 'The user does not exist'})
//   }
//   const isMatch =   await user.comparePassword()
//   if (isMatch) {
//       return res.status(200).json({token: createToken(user)})
//   }
//   return res.status(400).json({
//       msg: 'The mail or password are incorrect'
//   });
// }
