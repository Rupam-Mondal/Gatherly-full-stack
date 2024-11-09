export async function signupService(userObject){
    try {
        const response = await registerOnDb(userObject);
        return response;
    } catch (error) {
        console.log("Something went wrong");
        throw error;
    }
}