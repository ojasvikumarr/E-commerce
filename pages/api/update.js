import connectDb from "../../middleware/mongoose"
import Product from "../../models/products";
const handler = async (req , res) => {
    const product = await Product.find({});
    for(let prod of product)
    {if(typeof prod.img === 'Object'){
        prod.img = prod.img
        await prod.save();
    }}
    console.log('Products updated successfully');
}
export default connectDb(handler);