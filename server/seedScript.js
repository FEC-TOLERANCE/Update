
const DB = require('/Users/sinamb/Documents/Programs/SinaService/database/index.js');
const faker = require('faker');

function createUpdates() {
  var results = [];
  return DB.deleteUpdates()
    .then(() => {
      for (var i = 1; i < 101; i++) {
        let instance = {
          itemId: i,
          pledgeBackers: 10 + i,
          pledgeAmount: 100 + i,
          pledgeGoal: 1000 + i,
          creator: faker.name.firstName(),
          header: faker.lorem.sentence(),
          paragraph: faker.lorem.paragraph(),
        }
        console.log("One data instance created")
        results.push(DB.saveUpdate(instance));
      }
      return Promise.all(results);
    });
}

createUpdates()
  .then(() => {
    console.log("finished script")
    process.exit();
  })