
var DB = require('../database/index');
var faker = require('faker');

function createUpdates() {
  var results = [];
  return DB.deleteUpdates()
    .then(() => {
      for (var i = 1; i < 101; i++) {
        var instance = {
          itemId: i,
          pledgeBackers: 10 + i,
          pledgeAmount: 100 + i,
          pledgeGoal: 1000 + i,
          creator: faker.name.firstName(),
          header: faker.lorem.sentence(),
          paragraph: faker.lorem.paragraph(),
        }
        results.push(DB.saveUpdate(instance));
      }
      return Promise.all(results);
    });
}

createUpdates()
  .then(() => {
    process.exit();
  })
  .catch((error) => {
    return error;
  })