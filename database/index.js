const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true});

let updateSchema = new mongoose.Schema({
  itemId: {
    type: Number,
    unique: true
  },
  pledgeBackers: Number,
  pledgeAmount: Number,
  pledgeGoal: Number,
  creator: String,
  headers: [{
    headerId: String
  }],
  paragraphs: [{
    paraId: String,
  }]
});

let Updates = mongoose.model('Updates', updateSchema);

let saveUpdate = (incoming) => {
    var instance = new Updates({
      itemId: incoming.itemId,
      pledgeBackers: incoming.pledgeBackers,
      pledgeAmount: incoming.pledgeAmount,
      pledgeGoal: incoming.pledgeGoal,
      creator: incoming.creator,
      headers: [{
        headerId: incoming.headers
      }],
      paragraphs: [{
        paraId: incoming.paragraphs,
      }]
    })
    .save(err => {
      if (err) {
        console.log('err in saving ', err);
      } else {
        console.log('saved Updatess');
      }
    })
}

const deleteUpdates = () => {
  return Updates.deleteMany({});
}

module.exports.saveUpdate = saveUpdate;
module.exports.deleteUpdates = deleteUpdates;
