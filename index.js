/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const db = require('./db/connection.js');

const app = express();
const port = 3006;

app.listen(port, () => console.log(`Steam user tags service. listening at http://localhost:${port}`));
app.use(express.static('./client/dist'));

app.get('/game/:gameId', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.get('/api/tags/:gameId', (req, res) => {
// get all user tags for this game sorted by popularity ( most tagged first )
  const sqlText = `SELECT name FROM user_tags WHERE gameid = ${req.params.gameId} ORDER BY count DESC`;

  db.query(sqlText, (err, result) => {
    if (err) { res.status(500).send({ error: 'Internal server error' }); throw err; }
    res.json(JSON.parse(`{"tags": [${result.map((row) => `"${row.name}"`)}]}`));
    // ex. {"tags":["Difficult","Atmospheric","Anime","Music","Design & Illustration","Classic"]}
  });
});
