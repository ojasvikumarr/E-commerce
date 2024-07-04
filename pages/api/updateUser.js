import connectDb from "@/middleware/mongoose";
import User from "../../models/user";
import CryptoJS from "crypto-js";
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, oldPassword, newPassword } = req.body; // Corrected: newPassword instead of password
        console.log(name, email, oldPassword, newPassword);
        
        try {
            // Find the user by email
            const user = await User.findOne({ email: email });
            console.log(user);
            
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            // Decrypt the stored password to verify the old password
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
            console.log(originalPassword);
            
            if (oldPassword !== originalPassword) {
                return res.status(400).json({ error: "Old password does not match" });
            }

            // Encrypt the new password
            const encryptedPassword = CryptoJS.AES.encrypt(newPassword, process.env.AES_SECRET).toString();

            // Update the user's name and password
            const updatedUser = await User.findOneAndUpdate(
                { email: email },
                { name: name, password: encryptedPassword },
                { new: true } // Return the updated document
            );
            console.log(updatedUser);
            
            var token = jwt.sign({name: updatedUser.name , email: updatedUser.email }, process.env.JWT_SECRET, {expiresIn:"2d"});
            
            if (!updatedUser) {
                return res.status(500).json({ error: "User update failed" });
            }

            res.status(200).json({ message: "User updated successfully" , token : token});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
};

export default connectDb(handler);
