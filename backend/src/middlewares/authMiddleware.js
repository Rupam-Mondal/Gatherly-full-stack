import { verifyToken } from "../utils/jwt.js";

export function isAuthenticate(req , res , next){
    const Token = req.headers["x-access-token"];
    if(!Token){
        return res.json({
            success:false,
            message:"Token is required"
        })
    }

    try {
        const response = verifyToken(Token);
        req.user = response;
        next();
    } catch (error) {
        return res.json({
            success:false,
            message:"Unauthorised user"
        })
    }
}