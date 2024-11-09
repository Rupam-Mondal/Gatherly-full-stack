import { signupService } from "../service/userService.js";

export async function signupController(req , res){
    try {
        const userObject = req.body;
        const response = await signupService(userObject);
        return res.json({
            success:true,
            message:"Signed up successfully",
            data:response
        })
    } catch (error) {
        return res.json({
            success:false,
            message:"Something went wrong",
        })
    }

}