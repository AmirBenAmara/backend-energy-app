const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/energy';
mongoose.connect(uri, {})
  .then(() => console.log('MongoDB connection successful'))
  .catch(err => console.error('MongoDB connection error:', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected successfully");
});
