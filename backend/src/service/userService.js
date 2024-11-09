import { findUserByEmail, registerOnDb } from "../repository/userRepository.js";
import { CreateToken } from "../utils/jwt.js";
import bcrypt from 'bcrypt'

export async function signupService(userObject){
    try {
        const response = await registerOnDb(userObject);
        return response;
    } catch (error) {
        console.log("Something went wrong");
        throw error;
    }
}

export async function signinService(userObject){
    const userDetails = userObject;
    const user = await findUserByEmail(userDetails.email);
    try {
        if (!user || userDetails.username != user.username){
            throw null;
        }
        const result = await bcrypt.compare(userObject.password , user.password);
        if(result){
            const token = CreateToken(userObject);
            return token;
        }
        else{
            throw null;
        }
    } catch (error) {
        throw error;
    }
}