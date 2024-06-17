import user from "@/models/user";
import connectDb from "@/middleware/mongoose";
import CryptoJS from "crypto-js";
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        let u = await user.findOne({email : req.body.email})
        const bytes  = CryptoJS.AES.decrypt(u.password, 'secret key 123');
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        if((u) &&(req.body.password == originalText)){     
            var token = jwt.sign({name: u.name , email: u.email }, 'jwtsecret', {expiresIn:"2d"});
            res.status(200).json({ success: true , token})
        }else{
            res.status(400).json({error: "Invalid credentials"})
        }

    } else {
        res.status(400).json({ error: "This method is not allowed" })
        
    }
}
export default connectDb(handler);



