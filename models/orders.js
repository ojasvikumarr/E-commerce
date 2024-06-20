const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    email : {type : String , required: true},
    orderId : {type : String , required: true},
    paymentInfo : {type : String , default: ''},
    products : {type : Object , required:true },
    amount : {type : Number , required : true},
    status : {type : String , required : true , default : 'Pending'}
} , {timestamps:true});

export default mongoose.models.Order || mongoose.model("Order" , orderSchema)