import jwt from 'jsonwebtoken'
import { secret_key } from '../config/serverConfig.js';

export function CreateToken(payload){
    return jwt.sign(payload, secret_key , {expiresIn:'1d'});
}

export function verifyToken(Token){
    return jwt.verify(Token , secret_key);
}