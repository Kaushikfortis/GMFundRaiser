// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // You can change the port number

// Middleware to parse JSON requests
app.use(express.json());

// Sample data structure for storing donor information
const donors = [];

// Define an endpoint to create a new donor record
app.post('/api/donors', (req, res) => {
  const { name, amount } = req.body;

  // Validate the request data
  if (!name || !amount || isNaN(amount)) {
    return res.status(400).json({ error: 'Invalid data. Name and amount are required.' });
  }

  // Create a new donor object
  const newDonor = {
    id: donors.length + 1, // You can use a more robust ID generation method
    name,
    amount: parseFloat(amount), // Convert amount to a number
  };

  // Add the donor to the data structure
  donors.push(newDonor);

  return res.status(201).json(newDonor);
});

// Define an endpoint to retrieve all donors
app.get('/api/donors', (req, res) => {
  return res.status(200).json(donors);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const mongoose = require('mongoose');

// Replace YOUR_MONGODB_URI with your actual MongoDB URI
const mongoURI = 'mongodb+srv://kaushik:Pass@123@donors.0v5hnbm.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
