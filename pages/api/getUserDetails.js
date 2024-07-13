// pages/api/getUserDetails.js
import { decode } from 'punycode';
import connectDb from '../../middleware/mongoose';
import user from '../../models/user';
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {

      const token = req.body.token; // assuming id is stored in the token
      console.log(token) ;
      const decoded = jwt.verify(token , process.env.JWT_SECRET);
      console.log(decoded.email);
    const u = await user.find({email : decoded.email});
        console.log(u);
      if (!u) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ u});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Problem while fetching details of user' });
    }
  } else {
    res.status(400).json({ error: 'This method is not allowed' });
  }
};

export default connectDb(handler);
