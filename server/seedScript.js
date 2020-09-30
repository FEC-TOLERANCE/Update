
const DB = require('../database');
const faker = require('faker');

function createFAQ() {

  return DB.deleteFAQ()
    .then(() => {
      for (var i = 1; i < 101; i++) {
        let instance = {
          itemId: i,
          sentences: [{
            sentenceId: faker.lorem.sentence() + '?',
          }]
        }
        DB.saveUpdate(instance);
      }
    });
}

createUpdates()
  .then(() => {
    process.exit();
  })