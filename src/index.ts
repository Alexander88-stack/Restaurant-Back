import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import {orderRoutes }  from '../src/routes/orders.routes';
import { userRoutes } from '../src/routes/users.routes';
import { authRoutes } from './routes/auth.routes';
import bodyparser from 'body-parser';
import { ValidationError } from 'sequelize';
import { authController } from './controllers/auth.controller';





const app = express();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//middlewares 
app.use(morgan('dev'));

app.use(express.json());


const serverPort = 3000

app.post('/login', authController.login )

app.use('/auth', authRoutes.router);
app.use('/users', userRoutes.router);
app.use('/orders', orderRoutes.router);

// Levantando el servidor


app.listen( serverPort, () => {
    console.log(`El servidor se ha levantado ${ serverPort }`);
});




// routes
app.get('/', (req, res) => {
    
    res.send(`THE API is at http://localhost:${ serverPort }`)
});


