var express = require('express')
var app = express()
// app.use(bodyParser.json())
var port = 3007;

var DB = require('../database/index.js');

app.use(express.static('../client/dist'))


app.get('/updates/:itemId', (req, res) => {
  var itemId = req.params.itemId;
  DB.retrieveUpdates(itemId)
    .then( (updateInfo) => {
      res.status(200).send(updateInfo);
    })
    .catch( (error) => {
      res.send(error);
    })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})