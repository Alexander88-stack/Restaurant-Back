import {Request,Response} from 'express';
import  config  from '../config/config.json';
import jwt from 'jsonwebtoken';
import { User } from '../models/users.model';
import { checkJwt } from '../middlewares/checkJwt';
import { visitFunctionBody } from 'typescript';


class AuthController {

public async index (req:Request,res:Response) {

    try {

        const checkUser = await User.findAll({
            where: {
                username: req.body.username,
                mail: req.body.mail,
                password: req.body.password
                
            }
        });

        if(checkUser.length !== 0) {

        const token = jwt.sign(
            {
            username: req.body.username,    
            mail: req.body.mail,
            password: req.body.password,
            },
            config.jwtSecret,
            {expiresIn:"1h"}
    );
            res.send(token);
    }


 } catch(error) {
            res.sendStatus(404);
 }




}

 public    async login (req: Request, res: Response,) { 
        if (!req.body.mail || !req.body.password ) {
           
            
            return res.status(400).json({msg: 'Please, send your email and password'})
        }
        
      const user = await  User.findOne({
          where:{ mail: req.body.mail,
            //  password: req.body.password
            }  })      
         console.log(user);
         
      if (!user) {
          return res.status(400).json({msg: 'The user does not exist'})
      }
    
      
      if ( user.password === req.body.password ) {
          return res.status(200).json({msg: 'I know you guy'})
      }
      
      return res.status(400).json({
          msg: 'The mail or password are incorrect'
      });
    
     
    }


}

export const authController = new AuthController();