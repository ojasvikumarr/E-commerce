import orders from "@/models/orders";
import connectDb from "@/middleware/mongoose";
import jwt from "jsonwebtoken";  // Correct import statement

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = req.body.token;

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    let order = await orders.find({ email: data.email });
    console.log(order)
    return res.status(200).json({ orders: order });
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

export default connectDb(handler);
