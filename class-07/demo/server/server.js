'use strict';

// Sorta like import
const express = require('express');

// Constructor-ish for a new Express app
const app = express();


// Figure out what PORT to listen on
const PORT = 3001;

// Start the server on PORT
app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
