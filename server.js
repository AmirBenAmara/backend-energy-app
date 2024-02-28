const express = require('express');
const Buildings = require('./app/models/buildings');
const EnergyConsumption = require('./app/models/energy-consumption');
const EnergyBreakdowns = require('./app/models/energy-breackdowns');
const app = express();
const port = 3000;
const db = require('./app/database') ;
// const csv = require('./app/importCsv');
const cors = require('cors');

app.use(cors())

app.get('/buildings', async (req, res) => {
  const buildings = await Buildings.find({});
  res.json(buildings);
});

app.get('/energy-consumption', async (req, res) => {
  const buildings = await EnergyConsumption.find({});
  res.json(buildings);
});

app.get('/energy-breackdowns', async (req, res) => {
  const buildings = await EnergyBreakdowns.find({});
  res.json(buildings);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});