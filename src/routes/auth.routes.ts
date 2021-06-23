import { Router } from 'express';

import {authController} from '../controllers/auth.controller';


class AuthRoutes {

public router = Router();

constructor(){

 this.router.post('/signin', authController.index )
 this.router.post('/login', authController.login )
}
}

export const authRoutes = new AuthRoutes();