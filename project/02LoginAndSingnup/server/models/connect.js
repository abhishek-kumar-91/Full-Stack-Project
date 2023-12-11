const mongoose =require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:String,
    phoneNo:Number,
    password:String
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;