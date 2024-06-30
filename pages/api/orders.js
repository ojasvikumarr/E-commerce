import orders from "@/models/orders";
import connectDb from "@/middleware/mongoose";
import Product from "@/models/products";
import pincodes from "../../data/pincodes.json"
const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { phone , pincode , email, cart, subtotal, oid } = req.body;

    let sum = 0;
    let realsum = 0 ;
    for (let slug in cart) {
      sum += cart[slug].price * cart[slug].qty;
      let name = await Product.findOne({slug:slug})
      realsum += name.price*cart[slug].qty ;
    }
    
    console.log(sum , realsum)
    
    if (sum !== realsum) {
      return res.status(500).json({ error: "Cart is Tampered!" , cartClear : true });
    }
    if(phone.length < 10 || phone.length > 10 || !Number.isInteger(Number(phone)) ){
      return res.status(404).json({error : "Please enter a valid phone no.!" , cartClear : false })
    }
    if(pincode.length > 6 || !Number.isInteger(Number(pincode))){
      return res.status(404).json({error : "Please enter a valid pincode !" , cartClear : false })
    }
    if(!Object.keys(pincodes).includes(pincode)){
      return res.status(404).json({error : "This pincode is not servicable!!" , cartClear : false });
    }

    try {
      let o = new orders({
        email,
        orderId: oid,
        paymentInfo: '',
        products: cart,
        amount: subtotal,
        status: 'Paid'
      });

      let products = o.products;
      for (let slug in products) {
        let prod = await Product.findOne({slug : slug})
        console.log(prod.availableQty)
        
        if(prod.availableQty <= 0 || products[slug].qty > prod.availableQty){
          return res.status(500).json({error:`Some of the items are Out of stock like :${prod.item}` , cartClear : false })
        }
        await Product.findOneAndUpdate({ slug: slug }, { $inc: { "availableQty": -products[slug].qty } });
      }
      await o.save();

      res.status(200).json({ success: "Order is successfully placed", orderId: o._id });
    } catch (error) {
      console.error("Error placing order:", error);
      res.status(500).json({ error: "Failed to place order" , cartClear : false });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" , cartClear : false  });
  }
};

export default connectDb(handler);
