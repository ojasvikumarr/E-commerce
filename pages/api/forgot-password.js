// pages/api/forgot-password.js
import crypto from 'crypto';
import { sendMail } from '../../utils/email'; // Your nodemailer utility function
import connectDb  from '../../middleware/mongoose' ;
import User from '../../models/user'; // Assuming you have a User model

const handler = async(req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  console.log(email);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate reset token and expiry
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour

    // Update user with reset token and expiry
    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpires = resetPasswordExpires;
    await user.save();

    // Send reset password email
    const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password/${resetToken}`;
    const mailOptions = {
      to: user.email,
      from: 'your-email@example.com', // Replace with your verified email address in nodemailer
      subject: 'Password Reset Request',
      text: `You are receiving this email because you (or someone else) has requested to reset the password for your account.\n\n
        Please click on the following link, or paste it into your browser to complete the process:\n\n
        ${resetUrl}\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    await sendMail(mailOptions);

    res.status(200).json({ message: 'Password reset email sent. Check your inbox.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send password reset email' });
  }
}


export default connectDb(handler);