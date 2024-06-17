const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId : {type : String , required: true},
    products : [{
        productId : {type : String , required: true},
        quantity : {type : Number , default: 1}
    }],
    amount : {type : Number , required : true},
    status : {type : String , required : true , default : 'Pending'}
} , {timestamps:true});

export default mongoose.models.Order || mongoose.model("Order" , orderSchema)