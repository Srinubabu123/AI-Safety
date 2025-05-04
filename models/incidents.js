const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  severity: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Incident', incidentSchema);
