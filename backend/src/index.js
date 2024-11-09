import express from 'express'
import connectDb from './config/dbConfig.js';
import { port } from './config/serverConfig.js';
import apirouter from './Routes/apiRouter.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apirouter);

app.get('/ping' , (req , res) => {
    return res.json({
        message:"Req received"
    })
});

app.listen(port , () => {
    console.log("Server connected");
    connectDb();
})