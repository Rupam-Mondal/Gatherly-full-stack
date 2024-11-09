import jwt from 'jsonwebtoken'
import { secret_key } from '../config/serverConfig.js';

export function CreateToken(payload){
    return jwt.sign(payload, secret_key , {expiresIn:'1d'});
}