const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to mongo!');
});

mongoose.connect(process.env.MONGODB_URL);

const app = express();

const cors = require('cors');
app.use(cors());

// Route handlers


// Start server
const PORT = process.env.PORT;
if (!parseInt(PORT)) throw 'Invalid PORT';

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
