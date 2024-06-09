const express = require('express');
const db = require('./database');

const app = express();
const PORT = 3000;

app.get('/consulta-dados', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(rows);
  });
});

app.get('/liveness', (req, res) => {
  res.status(200).send('Liveness check OK');
});

app.get('/readiness', (req, res) => {
  res.status(200).send('Readiness check OK');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
