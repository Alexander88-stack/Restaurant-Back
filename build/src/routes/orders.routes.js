"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = require("express");
const orders_controller_1 = require("../controllers/orders.controller");
// import { checkJwt } from '../middlewares/checkJwt';[checkJwt]
class OrdersRoutes {
    constructor() {
        this.router = express_1.Router();
        // this.router.get('/', ordersController.show);
        this.router.get('/', orders_controller_1.ordersController.index);
        // this.router.get('/', ordersController.index);
        this.router.post('/', orders_controller_1.ordersController.create);
        this.router.delete('/:id', orders_controller_1.ordersController.delete);
        this.router.put('/:id', orders_controller_1.ordersController.update);
    }
}
;
exports.orderRoutes = new OrdersRoutes();
