import orders from "@/models/orders";
import connectDb from "@/middleware/mongoose";
import Product from "@/models/products";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, cart, subtotal, oid } = req.body;

    let sum = 0;
    let realsum = 0 ;
    for (let slug in cart) {
      sum += cart[slug].price * cart[slug].qty;
      let name = await Product.findOne({slug:slug})
      realsum += name.price*cart[slug].qty ;
    }
    
    console.log(sum , realsum)
    
    if (sum !== realsum) {
      return res.status(500).json({ error: "Cart is Tampered!" });
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
        if(prod.availableQty <= 0 || products[slug].qty >= prod.availableQty){
          return res.status(500).json({error:`Some of the items are Out of stock like :${prod.item}`})
        }
        await Product.findOneAndUpdate({ slug: slug }, { $inc: { "availableQty": -products[slug].qty } });
      }
      await o.save();

      res.status(200).json({ success: "Order is successfully placed", orderId: o._id });
    } catch (error) {
      console.error("Error placing order:", error);
      res.status(500).json({ error: "Failed to place order" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
