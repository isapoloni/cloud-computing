const express = require('express');
const mysql = require('mysql');
const os = require('os');

const app = express();
const PORT = 3000;

const db = mysql.createConnection({
  host: 'mysql',
  user: 'user',
  password: 'userpassword',
  database: 'mydatabase'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/consulta-dados', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(results);
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
    });
});

app.get('/readiness', (req, res) => {
  return res
    .status(200)
    .json({
      message: "O app está pronto!",
      plataform: os.platform(),
      freemen: os.freemem(),
      homedir: os.homedir()
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
