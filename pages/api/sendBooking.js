import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, contact, symptoms, date, medication, price } = req.body;

  // Debug logs to help with diagnosing issues
  console.log('Received data:', req.body);

  // Validation with .trim() to ensure non-empty strings
  if (
    !fullName?.trim() ||
    !contact?.trim() ||
    !medication?.trim() ||
    !date ||
    !price
  ) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: '📋 New Medication Booking',
      text: `
You have a new medication booking:

🧍 Full Name: ${fullName}
📞 Contact: ${contact}
💊 Medication: ${medication}
💰 Price: KES ${price}
📝 Symptoms: ${symptoms || 'Not provided'}
📅 Preferred Date: ${date}
      `,
    });

    if (error) {
      console.error('Email sending failed:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
