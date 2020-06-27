/* eslint-disable no-console */
const express = require('express');
const db = require('./db/connection.js');

const app = express();
const port = 3002;

app.listen(port, () => console.log(`Steam user tags service. listening at http://localhost:${port}`));
app.use(express.static('./client/dist'));

app.get('/api/tags/:gameId', (req, res) => {
// get all user tags for this game sorted by popularity ( most tagged first )
  const sqlText = `SELECT name FROM user_tags WHERE gameid = ${req.params.gameId} ORDER BY count DESC`;

  db.query(sqlText, (err, result) => {
    if (err) { res.status(500).send({ error: 'Internal server error' }); throw err; }
    console.log(`{"tags": [${result.map((row) => `"${row.name}"`)}]}`);
    res.json(JSON.parse(`{"tags": [${result.map((row) => `"${row.name}"`)}]}`));
    // ex. {"tags":["Difficult","Atmospheric","Anime","Music","Design & Illustration","Classic"]}
  });
});
