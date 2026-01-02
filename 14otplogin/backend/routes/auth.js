const express = require('express');
const router = express.Router();
const User = require('../models/User');
const axios = require('axios');

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

router.post('/send-otp', async (req, res) => {
  const { mobileNumber } = req.body;
  const otp = generateOTP();
  const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes expiry

  try {
    let user = await User.findOne({ mobileNumber });
    if (!user) {
      user = new User({ mobileNumber });
    }

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    await axios.post('https://www.fast2sms.com/dev/bulkV2', {
      route: 'otp',
      variables_values: otp,
      numbers: mobileNumber
    }, {
      headers: {
        authorization: process.env.FAST2SMS_API_KEY,
        'Content-Type': 'application/json'
      }
    });

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending OTP', error: err.message });
  }
});

router.post('/verify-otp', async (req, res) => {
  const { mobileNumber, otp } = req.body;

  try {
    const user = await User.findOne({ mobileNumber });

    if (user && user.otp === otp && user.otpExpires > new Date()) {
      res.status(200).json({ message: 'OTP verified, login successful' });
    } else {
      res.status(400).json({ message: 'Invalid or expired OTP' });
    }
  } catch (err) {
    res.status(500).json({ message: 'OTP verification failed', error: err.message });
  }
});

module.exports = router;
