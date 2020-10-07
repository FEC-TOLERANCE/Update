var express = require('express')
var app = express()
// app.use(bodyParser.json())
var port = 3007;

var DB = require('/Users/sinamb/Documents/Programs/SinaService/database/index.js');

app.use(express.static('/Users/sinamb/Documents/Programs/SinaService/client/dist'))


app.get('/updates/:itemId', (req, res) => {
  var itemId = req.params.itemId;
  DB.retrieveUpdates(itemId)
    .then( (updateInfo) => {
      console.log(updateInfo);
      res.send(updateInfo);
    })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})