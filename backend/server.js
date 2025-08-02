const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());

let visits = 0; // In-memory counter

app.get('/api/visits', (req, res) => {
  visits++;
  res.json({ visits });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
