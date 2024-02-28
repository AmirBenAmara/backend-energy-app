const mongoose = require('mongoose');

const buildingsSchema = new mongoose.Schema({
  cpe: String,
  lat: Number,
  lon: Number,
  totalarea: Number,
  name: String,
  fulladdress: String,
});

module.exports = mongoose.model('buildings', buildingsSchema);
