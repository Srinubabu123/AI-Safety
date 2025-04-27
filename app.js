const express = require('express');
const incidentRoutes = require('./routes/incident');

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Connect to MongoDB (already done in database.js)
require('./database'); // database.js

// Use the routes for incidents
app.use(incidentRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 5000');
});
