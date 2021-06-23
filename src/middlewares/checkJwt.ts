import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config.json';
import { User } from '../models/users.model';






export const checkJwt = (req: Request,res: Response, next: NextFunction) => {

    // coger el token del request
    const token = <string>req.headers["authorization"]

    try{


      jwt.verify(token, config.jwtSecret );


    }catch(error){
        res.sendStatus(401);
    }

    next();

}