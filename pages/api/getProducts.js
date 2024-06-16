import Product from "@/models/products";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    try {
        let products = await Product.find();
        
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default connectDb(handler);
