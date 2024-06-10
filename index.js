const express = require('express');
const db = require('./database');
const os = require('os');

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
  return res
    .status(200)
    .json({
      message: "O app está vivo!",
      path: process.cwd(),
      gid: process.getegid(),
      uid: process.getuid()
    })
});


app.get('/readiness', (req, res) => {
  return res
    .status(200)
    .json({
      message: "O app está pronto!",
      plataform: os.platform(),
      freemen: os.freemem(),
      homedir: os.homedir()
    })
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
