// utils/email.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL,
    pass: process.env.PASS, // Or use an app-specific password if 2-factor authentication is enabled
  },
});

export async function sendMail(mailOptions) {
  try {
    const info = await transporter.sendMail({
      ...mailOptions,
      from: process.env.GMAIL,
    });
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
