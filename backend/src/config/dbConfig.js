import mongoose from 'mongoose'
import { db_url } from './serverConfig.js'

export default async function connectDb(){
    try {
        const response = await mongoose.connect(db_url);
        console.log("Database connected");
        return response;
    } catch (error) {
        console.log("Something went wrong");
        return null;
    }
}