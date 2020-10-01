const express = require('express')
// var bodyParser = require('body-parser')
const app = express()
// app.use(bodyParser.json())
const port = 3001;
const mongoose = require('mongoose');
// var faker = require('faker');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
// const DB = require('./database');

app.use(express.static('/Users/sinamb/Documents/Programs/FAQService/SinaService/client/dist'))


app.get('/faq', (req, res) => {
  //run a function that creates 100 random objects


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})