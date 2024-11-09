import express from 'express'
import { signupController } from '../../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/' , (req , res) => {
    res.json({
        message:"Pong"
    })
});

userRouter.post('/signup' , signupController);


export default userRouter;