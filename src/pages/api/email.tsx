import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { renderToStaticMarkup } from 'react-dom/server';
import KoalaWelcomeEmail from '@/components/components/KoalaWelcomeEmail';

const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  secure: true, // For example, using Gmail
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { userFirstname, phoneNumber, userMessage } =
      req.body;

    const emailHtml = renderToStaticMarkup(
      <KoalaWelcomeEmail
        userFirstname={userFirstname}
        phoneNumber={phoneNumber}
        userMessage={userMessage}
      />
    );

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: [
        'zalalbd@gmail.com ',
        'info@anygraphicstoday.com',
      ],
      subject: 'Great news you have new messages ✨',
      html: emailHtml,
    };

    try {
      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ message: 'Email sent successfully' });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error sending email', error });
    }
  } else if (req.method === 'GET') {
    res.status(200).json({ message: 'Working...' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
