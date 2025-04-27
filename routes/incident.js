const express = require('express');
const mongoose = require('mongoose');
const Incident = require('../models/incident');
const router = express.Router();

// 1. GET /incidents - Retrieve all incidents
router.get('/incidents', async (req, res) => {
  try {
    const incidents = await Incident.find();
    res.status(200).json(incidents);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching incidents', error: err });
  }
});

// 2. POST /incidents - Log a new incident
router.post('/incidents', async (req, res) => {
  const { title, description, severity } = req.body;
  
  if (!title || !description || !severity) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newIncident = new Incident({ title, description, severity });

  try {
    const savedIncident = await newIncident.save();
    res.status(201).json(savedIncident);
  } catch (err) {
    res.status(500).json({ message: 'Error saving incident', error: err });
  }
});

// 3. GET /incidents/:id - Retrieve a specific incident by ID
router.get('/incidents/:id', async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
      }
    const incident = await Incident.findById(id);
    if (!incident) {
      return res.status(404).json({ message: 'Incident not found' });
    }
    res.status(200).json(incident);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching incident', error: err });
  }
});

// 4. DELETE /incidents/:id - Delete an incident by ID
router.delete('/incidents/:id', async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
      }
    const deletedIncident = await Incident.findByIdAndDelete(id);
    if (!deletedIncident) {
      return res.status(404).json({ message: 'Incident not found' });
    }
    res.status(200).json({ message: 'Incident deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting incident', error: err });
  }
});

module.exports = router;
