const db = require('./db/connection.js')
const express = require('express')
const app = express()
const port = 3002

app.listen(port, () => console.log(`Steam user tags service. listening at http://localhost:${port}`))
app.use(express.static('./client/dist'));

app.get('/api/tags/:gameId', ( req, res) => {

    db.query( 'use steam;', (err, result, fields) => {
        if (err) throw err;
        var sqlText = `SELECT name FROM user_tags WHERE gameid = ${ req.params.gameId } ORDER BY count DESC`;
        db.query( sqlText, (err, result, fields) => {
            if (err) throw err;
            res.send( result.map( rdp => rdp['name'] )  );
        })
    })
    
});




var sampleTags = ['Strategy', 'Turn-Based Strategy', 'Historical', 'Multiplayer', 'Singleplayer', 'Turn-Based', 'Grand Strategy', '4X', 'War', 'Simulation', 'Tactical', 'City Builder', 'Great Soundtrack', 'Moddable', 'Online Co-Op', 'Co-op', 'Building', 'Management', 'Hex Grid', 'Atmospheric'];