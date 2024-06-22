import orders from "@/models/orders";
import connectDb from "@/middleware/mongoose";



const handler = async (req, res) => {
    if (req.method == 'POST') {
      //checking whethter the cart is tampered or not ?

      const { email, cart, subtotal, oid } = req.body;
  
      let o = new orders({
        email,
        orderId: oid,
        paymentInfo: '',
        products: cart,
        amount: subtotal,
        status: 'Paid'
      });
      await o.save();
  
      res.status(200).json({ success: "Order is successfully placed", orderId: o._id });
    } else {
      res.status(400).json({ error: "This method is not allowed" });
    }
  };
  
  export default connectDb(handler);
