import axios from 'axios';

const BASE_URL = 'https://sandbox.safaricom.co.ke'; // Change to prod for live

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { phone, amount } = req.body;

  try {
    // 1. Get Access Token
    const tokenRes = await axios.get(`${BASE_URL}/oauth/v1/generate?grant_type=client_credentials`, {
      auth: {
        username: process.env.MPESA_CONSUMER_KEY,
        password: process.env.MPESA_CONSUMER_SECRET,
      },
    });
    const token = tokenRes.data.access_token;

    // 2. Format timestamp & password
    const timestamp = new Date()
      .toISOString()
      .replace(/[^0-9]/g, '')
      .slice(0, 14);
    const password = Buffer.from(
      `${process.env.MPESA_SHORTCODE}${process.env.MPESA_PASSKEY}${timestamp}`
    ).toString('base64');

    // 3. STK Push Request for PayBill
    const stkRes = await axios.post(
      `${BASE_URL}/mpesa/stkpush/v1/processrequest`,
      {
        BusinessShortCode: process.env.MPESA_SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline', // ✅ For PayBill
        Amount: amount,
        PartyA: phone,
        PartyB: process.env.MPESA_SHORTCODE,
        PhoneNumber: phone,
        CallBackURL: process.env.MPESA_CALLBACK_URL,
        AccountReference: 'Healthwise', // Could be invoice ID or name
        TransactionDesc: 'Medication Booking Payment',
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    res.status(200).json({ message: '✅ STK Push sent to phone', data: stkRes.data });
  } catch (error) {
    console.error('M-Pesa error:', error?.response?.data || error.message);
    res.status(500).json({ error: '❌ Failed to initiate M-Pesa payment' });
  }
}
