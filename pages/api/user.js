import connectDb from "@/middleware/mongoose";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { token } = req.body;

        // console.log("Received token:", token);

        if (!token) {
            return res.status(401).json({ error: "Token is missing" });
        }

        const jwtSecret = process.env.JWT_SECRET;

        console.log("Using JWT secret:", jwtSecret);

        if (!jwtSecret) {
            return res.status(500).json({ error: "JWT secret is not defined" });
        }

        try {
            const data = jwt.verify(token, jwtSecret);
            // console.log("Decoded email:", data.email);

            res.status(200).json({ email: data.email });
        } catch (error) {
            console.error("JWT verification error:", error.message);
            res.status(401).json({ error: "Invalid token" });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
};

export default connectDb(handler);
