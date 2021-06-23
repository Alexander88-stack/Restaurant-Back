"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersController = void 0;
const orders_model_1 = require("../models/orders.model");
class OrdersController {
    async index(req, res) {
        try {
            const orders = await orders_model_1.Orders.findAll({ raw: true });
            const ordersId = await orders_model_1.Orders.findByPk(req.params.id, { raw: true });
            // res.send(ordersId); POR EL MOMENTO LO HE DESACTIVADO YA QUE SI LO DEJO
            // ESTOY HACIENDO UNA DOBLE PETICION Y SALTA UN ERROR COMO QUE YA HABIA SIDO ENVIADO!!!
            // CUANDO PASARE A LIMPIAR EL CODIGO LO BORRARE.
            return res.send(orders);
        }
        catch (error) {
            return res.sendStatus(500);
        }
    }
    // public  show(req: Request,res:Response) {
    //      const orders =  Orders.findAll()
    //       .then((orders) => {
    //         console.log(orders);
    //     })
    //       .catch((error)=> {
    //         console.log(error);
    //     })
    //       res.json(orders);
    async create(req, res) {
        console.log(req.body);
        //    const params: Orders = req.body;
        //   await Orders.create<Orders>(params)
        //    .then((orders: Orders) => res.status(201).json(orders))
        //    .catch((err: Error) => res.status(500).json(err));
        try {
            const orders = req.body;
            const newOrder = await orders_model_1.Orders.create(orders);
            // nameAndRol: req.body.nameAndRol,
            // table: req.body.table,
            // products: req.body.products,
            // persons: req.body.persons
            return res.status(201).json(newOrder);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Error creando la tabla'
            });
        }
    }
    async delete(req, res) {
        try {
            const orders = await orders_model_1.Orders.destroy({
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
            const orders = await orders_model_1.Orders.update({
                nameAndRol: req.body.nameAndRol,
                table: req.body.table,
                products: req.body.products,
                persons: req.body.persons
            }, {
                where: {
                    id: req.params.id
                }
            });
            res.json(orders);
        }
        catch (error) {
            res.json(error);
        }
    }
}
;
exports.ordersController = new OrdersController();
// function body(arg0: string, body: any, orders: void) {
//     throw new Error('Function not implemented.');
// }
