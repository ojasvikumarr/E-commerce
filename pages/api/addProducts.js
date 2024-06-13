import products from "@/models/products";
import connectDb from "@/middleware/mongoose";


const handler = async (req, res) => {
    if (req.method == 'POST') {
        for(let i = 0 ; i < req.body.length ; i++){
        let p = new products({
            item: req.body[i].item,
            slug: req.body[i].slug,
            desc: req.body[i].desc,
            img: req.body[i].img,
            category: req.body[i].category,
            size: req.body[i].size,
            color: req.body[i].color,
            price: req.body[i].price,
            availableQty: req.body[i].availableQty,
        })
        await p.save()
    }
        res.status(200).json({ success: "Hello there you r successfull" })

    } else {
        res.status(400).json({ error: "This method is not allowed" })
        
    }
}
export default connectDb(handler);



