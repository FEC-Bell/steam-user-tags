const express = require('express')
const app = express()
const port = 3002

app.listen(port, () => console.log(`Steam user tags service. listening at http://localhost:${port}`))
app.use(express.static('./client/dist'));

// SAMPLE API CALLS

app.get('/api/tags/:productId', ( req, res) => {
    res.send( sampleTags );
});


var sampleTags = ['Strategy', 'Turn-Based Strategy', 'Historical', 'Multiplayer', 'Singleplayer', 'Turn-Based', 'Grand Strategy', '4X', 'War', 'Simulation', 'Tactical', 'City Builder', 'Great Soundtrack', 'Moddable', 'Online Co-Op', 'Co-op', 'Building', 'Management', 'Hex Grid', 'Atmospheric'];