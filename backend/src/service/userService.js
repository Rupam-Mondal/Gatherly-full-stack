import { findUserByEmail, registerOnDb } from "../repository/userRepository.js";
import { CreateToken } from "../utils/jwt.js";

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
        if(!user){
            throw null;
        }
        const token = CreateToken(userObject);
        return token;
    } catch (error) {
        throw error;
    }
}