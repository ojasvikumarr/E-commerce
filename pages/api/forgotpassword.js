import crypto from 'crypto';

import connectDb from '../../middleware/mongoose';
import User from '../../models/user'; // Assuming you have a User model

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  console.log(req.body);
  const {email} = req.body;

  console.log(email);

  try {
    const user = await User.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate reset token and expiry
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour

    // Update user with reset token and expiry
    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpiry = resetPasswordExpires;
    await user.save();

    // Send reset password email
    const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password/${resetToken}`;
    

    res.status(200).json({ message: 'Password reset email sent. Check your inbox.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send password reset email' });
  }
}

// Explicitly enable body parsing middleware
export const config = {
  api: {
    bodyParser: true,
  },
};

export default connectDb(handler);
