const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mobileNumber: { type: String, required: true, unique: true },
  otp: String,
  otpExpires: Date
});

module.exports = mongoose.model('User', userSchema);
