const mongoose = require('mongoose');

// MongoDB connection URI
const dbURI = 'mongodb://localhost:27017/incidentLog'; // Update this if you're using MongoDB Atlas

// Connecting to MongoDB
mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
