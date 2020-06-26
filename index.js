const db = require('./db/connection.js')
const express = require('express')
const app = express()
const port = 3002

app.listen(port, () => console.log(`Steam user tags service. listening at http://localhost:${port}`))
app.use(express.static('./client/dist'));

app.get('/api/tags/:gameId', ( req, res) => {

    // get all user tags for this game sorted by popularity ( most tagged first )
    var sqlText = `SELECT name FROM user_tags WHERE gameid = ${ req.params.gameId } ORDER BY count DESC`;

    db.query( sqlText, (err, result, fields) => {
        if (err) throw err;
        res.send( result.map( row => row['name'] )  );
    })

});