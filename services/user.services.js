const USerModel = require('../model/user.model');
class UserService{
    static async registerUser(email,password){
        try {
            const createUser = new UserModel({email,password});
            return await createUser.save();
        } catch (error) {
            console.log(error);
        }   
    }
}

module.exports = UserService; 