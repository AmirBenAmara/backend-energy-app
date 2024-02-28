const mongoose = require('mongoose');

const energyBreakdownsSchema = new mongoose.Schema({
  timestamp: String,
  renewable_biomass: Number,
  renewable_hydro: Number,
  renewable_solar: Number,
  renewable_wind: Number,
  renewable_geothermal: Number,
  renewable_otherrenewable: Number,
  renewable: Number,
  nonrenewable_coal: Number,
  nonrenewable_gas: Number,
  nonrenewable_nuclear: Number,
  nonrenewable_oil: Number,
  nonrenewable: Number,
  hydropumpedstorage: Number,
  unknown: Number, 
});

module.exports = mongoose.model('energybreakdowns', energyBreakdownsSchema);
