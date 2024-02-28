const mongoose = require('mongoose');
const csvParser = require('csv-parser');
const fs = require('fs');
require('./database'); // Connects to MongoDB
const Buildings = require('./models/buildings');
const energyConsumption = require('./models/energy-consumption');
const energyBreakdowns = require('./models/energy-breackdowns');


fs.createReadStream('./app/csvData/metadata.csv')
    .pipe(csvParser())
    .on('data', (row) => {
        const newItem = new Buildings(row);
        newItem.save().then(() => console.log('Item saved:', row));
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });


fs.createReadStream('./app/csvData/smart_meter.csv')
    .pipe(csvParser())
    .on('data', (row) => {
        const newItem = new energyConsumption(row);
        newItem.save().then(() => console.log('Item saved:', row));
    })
    .on('end', () => {
        console.log('smart_meter.csv successfully processed');
    });

fs.createReadStream('./app/csvData/energy_source_breakdown.csv')
    .pipe(csvParser())
    .on('data', (row) => {
        const newItem = new energyBreakdowns(row);
        newItem.save().then(() => console.log('Item saved:', row));
    })
    .on('end', () => {
        console.log('energy_source_breakdown.csv successfully processed');
    });
