import express from 'express'
import connectDb from './config/dbConfig.js';
import { port } from './config/serverConfig.js';


const app = express();

app.get('/ping' , (req , res) => {
    return res.json({
        message:"Req received"
    })
});

app.listen(port , () => {
    console.log("Server connected");
    connectDb();
})