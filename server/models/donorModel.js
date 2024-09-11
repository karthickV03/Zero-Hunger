const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  foodItem: { type: String, required: true },
  quantity: { type: Number, required: true },
  photo: { type: String },
  date: { type: Date, default: Date.now },
  time: { type: String, default: new Date().toLocaleTimeString() }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
