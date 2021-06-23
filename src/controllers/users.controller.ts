import { Request, Response } from 'express';
import { User } from '../models/users.model';



class UsersController {

    public async index (req:Request, res:Response){
       
        try{
       const users =  await User.findAll({raw: true});
       

    const usersId = await User.findByPk(req.params.id , {raw:true})
            res.send(usersId);

    } catch (error) {
        res.sendStatus(500);
    }
    }


    public show(req: Request,res:Response) {
        User.findAll()
        .then((users) => {
            console.log(users);
            
        })
        .catch((error)=> {
            console.log(error);
            
        })
        res.send('Ok');
     }
        public async create(req: Request,res:Response) {
            try{
                const request = req.body;
                const newUser = await User.create(request);
                res.json(newUser);
            }catch(error){
                res.json(error);
            }
        }

        public async delete(req: Request, res: Response) {
            try{
                const users = await User.destroy({
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
                const users = await User.update({
                    username: req.body.username,
                    mail: req.body.mail,
                    password: req.body.password,
                },
                {
                    where: {
                        id: req.params.id
                    }
                })
                res.json(users)
            }catch(error){
                res.json(error)
            }
        }

    };
     
 
export const usersController = new UsersController();       



































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