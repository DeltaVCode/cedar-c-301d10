const express = require('express');
require('dotenv').config();

const app = express();

const cors = require('cors');
app.use(cors());

// Route handlers


// Start server
const PORT = process.env.PORT;
if (!parseInt(PORT)) throw 'Invalid PORT';

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
