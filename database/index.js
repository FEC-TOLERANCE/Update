const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true});

let faqSchema = new mongoose.Schema({
  itemId: {
    type: Number,
    unique: true
  },
  paragraphs: [{
    paraId: String,
  }]
});

let faq = mongoose.model('FAQs', faqSchema);

let saveFAQ = (incoming) => {
    var instance = new faq({
      itemId: incoming.itemId,
      sentences: [{
        sentenceId: incoming.sentence.sentenceId,
      }]
    })
    .save(err => {
      if (err) {
        console.log('err in saving ', err);
      } else {
        console.log('saved faqs');
      }
    })
}

const deleteFAQ= () => {
  return faq.deleteMany({});
}

module.exports.saveFAQ = saveFAQ;
module.exports.deleteFAQ = deleteFAQ;
