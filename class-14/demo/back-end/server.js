const express = require('express');
require('dotenv').config();

// Authentication boilerplate
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
  // Ideally this comes from .env
  jwksUri: 'https://dev-txxoephp.us.auth0.com/.well-known/jwks.json',
});

const { promisify } = require('util');
// Convert to work with await
const verify = promisify(jwt.verify);

function getKey(header, callback) {
  // stretch goal: promisify getSigningKey, too
  client.getSigningKey(header.kid, function (err, key) {
    if (err) return callback(err);

    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

async function verifyUser(authorization) {
  if (!authorization) return null;
  let token = authorization.split(' ')[1];

  return await verify(token, getKey, {});
}

// Connect to Mongoose
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
  const { authorization } = req.headers;

  // Reject with Unauthorized if not authenticated
  let user = await verifyUser(authorization);
  if (!user) {
    res.sendStatus(401);
    return;
  }

  // user.email exists!

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
  let catUpdate = req.body;

  // mongoose update options
  let options = {
    new: true, // return the updated Cat, not the old version
    overwrite: true, // replace the whole Cat, instead of "patching"
  }

  try {
    let updatedCat = await Cat.findByIdAndUpdate(id, catUpdate, options);
    res.send(updatedCat);
  } catch (err) {
    handleError(err, res);
  }
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
