import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true, "Username is required"],
        unique:true,
    },
    email:{
        type:String,
        required:[true , "Email is required"],
        unique:true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ]
    },
    password:{
        type:String,
        required: [true, "Password is required"],
        minlength:[4 , "Minimum 4 length string is required"]
    }

} , {timestamps:true});

userSchema.pre('save' , function modify(next){
    const user = this;
    const salt = bcrypt.genSaltSync(9);
    const hashedpassword = bcrypt.hashSync(user.password , salt);
    user.password = hashedpassword;
    next();
})

const User = mongoose.model("User" , userSchema);

export default User;