import User from '../schema/user.js'

export async function registerOnDb(userObject){
    try {
        const user = await User.create(userObject);
        return user;
    } catch (error) {
        console.log("Something went wrong");
        throw error;
    }
}