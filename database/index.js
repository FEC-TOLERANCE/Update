var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/updater', {useNewUrlParser: true});

var updateSchema = new mongoose.Schema({
  itemId: {
    type: Number,
    unique: true
  },
  pledgeBackers: Number,
  pledgeAmount: Number,
  pledgeGoal: Number,
  creator: String,
  header: String,
  paragraph: String,
  updateCount: Number,
  dateOne: String,
  dateTwo: String,
  secondHeader: String,
  secondParagraph: String,
});

var Updates = mongoose.model('Updates', updateSchema);

var saveUpdate = (incoming) => {
    return instance = new Updates({
      itemId: incoming.itemId,
      pledgeBackers: incoming.pledgeBackers,
      pledgeAmount: incoming.pledgeAmount,
      pledgeGoal: incoming.pledgeGoal,
      creator: incoming.creator,
      header: incoming.header,
      paragraph: incoming.paragraph,
      updateCount: incoming.updateCount,
      dateOne: incoming.dateOne,
      dateTwo: incoming.dateTwo,
      secondHeader: incoming.secondHeader,
      secondParagraph: incoming.secondParagraph,
    })
    .save(err => {
      if (err) {
        console.log('err in saving ', err);
      } else {
        console.log('saved Updatess');
      }
    })
}

var deleteUpdates = () => {
  return Updates.deleteMany({});
}

var retrieveUpdates = (incId) => {
  var item = Updates.find({"itemId": incId});
  // console.log(item)
  return item;
}


module.exports = {saveUpdate, deleteUpdates, retrieveUpdates};

