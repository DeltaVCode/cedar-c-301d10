const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

const Cat = require('./models/cat');

async function seed() {
  // delete all my cats and start over
  console.log('Deleting existing cats')
  await Cat.deleteMany({});

  const myCat = new Cat({
    name: 'Fluffy',
    color: 'orange',
    hasClaws: true,
    location: 'Cedar Rapids'
  })
  myCat.save(); // magic from Mongoose

  await Cat.create({
    name: 'Garfield',
    color: 'orange with black stripes'
  })

  mongoose.disconnect();
}

seed();
