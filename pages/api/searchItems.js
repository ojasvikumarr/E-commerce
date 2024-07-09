import connectDb from "../../middleware/mongoose"

const handler = async (req , res) => {
    if(req.method != 'POST'){
        return res.status(404).json({error : "Wrong request sent"}) ;
    }
    const term = req.body ;
    const {db} = await connectDb();
    const products = db
    .collections('products')
    .find({name : {$regex : `^${term}` , $options: 'i'}})
    .limit(10)
    .toArray();
    console.log(products);
    res.status(200).json(products);
}
export default handler;