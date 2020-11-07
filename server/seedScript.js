
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
          updateCount: Math.random() < 0.5 ? 1 : 2,
          dateOne: faker.date.between('2015-01-01', '2018-01-05'),
          dateTwo: faker.date.between('2018-01-01', '2020-01-05'),
          secondHeader: faker.lorem.sentence(),
          secondParagraph: faker.lorem.paragraph(),
        }
        results.push(DB.saveUpdate(instance));
      }
      return Promise.all(results);
    })
    .catch(err => {
      console.log(err);
    });
}

createUpdates()
  .then(() => {
    process.exit();
  })
  .catch((error) => {
    return error;
  })