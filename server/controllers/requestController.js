// /controllers/requestController.js
const Request = require('../models/Request');

// Handle request creation
exports.createRequest = async (req, res) => {
  try {
    const { name, email, address, city, foodItem, quantity, foodImage } = req.body;

    // Validate required fields
    if (!name || !email || !address || !city || !foodItem || !quantity) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Get current date and time
    const now = new Date();
    const requestDate = now.toISOString().split('T')[0]; // YYYY-MM-DD
    const requestTime = now.toTimeString().split(' ')[0]; // HH:MM:SS

    // Create new request object
    const newRequest = new Request({
      name,
      email,
      address,
      city,
      foodItem,
      quantity,
      foodImage,
      requestDate,  // Store the date
      requestTime,  // Store the time
    });

    // Save to the database
    await newRequest.save();

    // Send success response
    res.status(201).json({ message: 'Request submitted successfully' });
  } catch (error) {
    // Handle server errors
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};


