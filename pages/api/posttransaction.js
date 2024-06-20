import connectDb from "@/middleware/mongoose"
import orders from "@/models/orders"

const handler = async(req , res) => {

    if(req.body.STATUS == 'TXN_SUCCESS'){
        let order = await orders.findOneAndUpdate({orderId : req.body.ORDERID} , {status : 'PAID' , paymentInfo : JSON.stringify(req.body)})
    }else if (req.body.STATUS == 'PENDING'){
        let order = await orders.findOneAndUpdate({orderId : req.body.ORDERID} , {status : 'PENDING' , paymentInfo : JSON.stringify(req.body)})
    }
    res.redirect('/order' , 200)
}

export default connectDb(handler)