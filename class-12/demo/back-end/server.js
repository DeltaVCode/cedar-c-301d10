const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to mongo!');
});

mongoose.connect(process.env.MONGODB_URL);

// Import our Mongoose model
const Cat = require('./models/cat');

const app = express();

const cors = require('cors');
app.use(cors());

// Route handlers
app.get('/cats', async (req, res) => {
  const location = req.query.location;

  const findQuery = {};
  // Only if the query includes location, add location to our filter
  if (location) {
    findQuery.location = location;
  }
  const cats = await Cat.find(findQuery);

  res.send(cats);
})

app.post('/cats', postCats);

// Start server
const PORT = process.env.PORT;
if (!parseInt(PORT)) throw 'Invalid PORT';

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));

function postCats(req, res) {
  console.log('headers', req.headers);
  console.log('body', req.body);

  res.send('meow');
}
