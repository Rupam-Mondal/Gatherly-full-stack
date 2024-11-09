import express from 'express'
import { signinController, signupController } from '../../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/' , (req , res) => {
    res.json({
        message:"Pong"
    })
});

userRouter.post('/signup' , signupController);
userRouter.post('/signin', signinController);


export default userRouter;