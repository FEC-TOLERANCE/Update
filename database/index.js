const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/updater', {useNewUrlParser: true});

let updateSchema = new mongoose.Schema({
  itemId: {
    type: Number,
    unique: true
  },
  pledgeBackers: Number,
  pledgeAmount: Number,
  pledgeGoal: Number,
  creator: String,
  header: String,
  paragraph: String
});

let Updates = mongoose.model('Updates', updateSchema);

let saveUpdate = (incoming) => {
    return instance = new Updates({
      itemId: incoming.itemId,
      pledgeBackers: incoming.pledgeBackers,
      pledgeAmount: incoming.pledgeAmount,
      pledgeGoal: incoming.pledgeGoal,
      creator: incoming.creator,
      header: incoming.header,
      paragraph: incoming.paragraph,

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
