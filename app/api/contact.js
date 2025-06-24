import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // Send mail
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New contact from ${name}`,
        text: message,
        html: `<p>You have a new contact form submission</p>
               <p><strong>Name: </strong> ${name}</p>
               <p><strong>Email: </strong> ${email}</p>
               <p><strong>Message: </strong> ${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending message' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}