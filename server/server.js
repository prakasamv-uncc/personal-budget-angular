const express = require('express');
const cors = require('cors');

const fs= require('fs');    // File system
const path = require('path');    // Path module
const app = express();
const port = 3000;
app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

/* Loading JSON from file using file system  */
const budget = JSON.parse(fs.readFileSync(`${__dirname}/budget.json`, 'utf8'));

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
