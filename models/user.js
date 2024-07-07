const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {type : String , required: true},
    email : {type : String , required: true , unique: true},
    password : {type : String , required: true},
    resetPasswordToken : {type : String , default : undefined},
    resetPasswordExpiry : {type : String , default : undefined }
    
} , {timestamps:true});
mongoose.models = {}
export default  mongoose.model("User" , userSchema)