const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB (replace 'your-database-url' with your actual MongoDB connection URL)
mongoose.connect('postgresql://postgres:GMFundraiser123#@db.jnzjpwilnfcwwxgilosz.supabase.co:5432/postgres', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Middleware to parse JSON requests
app.use(express.json());

// Define routes for handling donations
// Create, Read, Update, Delete (CRUD) operations for donations go here

// Start the server on a specified port (e.g., 5000)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
