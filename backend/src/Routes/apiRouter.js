import express from 'express'
import userRouter from './v1/userRouter.js';

const apirouter = express.Router();


apirouter.use('/v1/user' , userRouter);
export default apirouter;

