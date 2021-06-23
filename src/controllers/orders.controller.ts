import {Request, Response} from 'express';
import {Orders} from '../models/orders.model';



class OrdersController {

    public async index (req:Request, res:Response){
        try{
       const orders =  await Orders.findAll({raw: true});
          

        const ordersId = await Orders.findByPk(req.params.id , {raw:true})
            
            return res.send(orders)
    } catch (error) {
            return res.sendStatus(500);
    }
    }


            
     
     
        public async create(req: Request,res:Response){
                console.log(req.body);

                
            try{

                const orders =  req.body;
                const newOrder =  await Orders.create(orders) 
                
                    
                
               return res.status(201).json(newOrder);
            }catch(error){
                console.log(error);
                return res.status(500).json({
                    ok: false,
                    msg: 'Error creando la tabla'
                });
            }
        }

        public async delete(req: Request, res: Response) {
            try{
                const orders = await Orders.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                res.sendStatus(200);
            }catch(error){
                res.json(error);
            }
        }

        public async update(req:Request,res:Response){
            try{
                const orders = await Orders.update({
                    nameAndRol: req.body.nameAndRol,
                    table: req.body.table,
                    products: req.body.products,
                    persons: req.body.persons
                },
                {
                    where: {
                        id: req.params.id
                    }
                })
                res.json(orders)
            }catch(error){
                res.json(error)
            }
        }

    };
     
 
export const ordersController = new OrdersController();       


