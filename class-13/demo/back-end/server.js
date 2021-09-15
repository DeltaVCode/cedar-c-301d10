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
// Handle request body with JSON
app.use(express.json());

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
// id = parameter
app.delete('/cats/:id', deleteCat)
app.put('/cats/:id', putCat)

// Start server
const PORT = process.env.PORT;
if (!parseInt(PORT)) throw 'Invalid PORT';

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));

async function postCats(req, res) {
  console.log('headers', req.headers);
  console.log('body', req.body);

  try {
    const newCat = await Cat.create(req.body);
    res.send(newCat);
  } catch (err) {
    handleError(err, res);
  }
}

async function putCat(req, res) {
  // value from route /cats/:id
  let id = req.params.id;

  res.send(id);
}

async function deleteCat(req, res) {
  // value from route /cats/:id
  let id = req.params.id;

  try {
    await Cat.findByIdAndDelete(id);
    res.status(204).send();
  }
  catch (err) {
    handleError(err, res);
  }
}

// TODO: move to a module
function handleError(err, res) {
  console.error(err);
  res.status(500).send('oops!');
}
