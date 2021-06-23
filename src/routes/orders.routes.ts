import {Router} from 'express';
import { ordersController } from '../controllers/orders.controller';

// import { checkJwt } from '../middlewares/checkJwt';[checkJwt]



class OrdersRoutes {
    public router: Router = Router();

    constructor(){

        
        
        this.router.get('/', ordersController.index);
        this.router.post('/', ordersController.create);
        this.router.delete('/:id', ordersController.delete);
        this.router.put('/:id', ordersController.update);
            
        
    }
};





export const orderRoutes = new OrdersRoutes();










    
 