// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db'); // Import the database connection

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Define the /api/data endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Endpoint to test database connection
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

process.on('SIGINT', () => {
  pool.end()
    .then(() => {
      console.log('Pool has been closed successfully');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Error closing pool', err.stack);
      process.exit(1);
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
