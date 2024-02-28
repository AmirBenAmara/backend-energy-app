const mongoose = require('mongoose');

const energyConsumptionSchema = new mongoose.Schema({
  timestamp: Date,
  cpe: String,
  active_energy : Number
});

module.exports = mongoose.model('energyconsumption', energyConsumptionSchema);
