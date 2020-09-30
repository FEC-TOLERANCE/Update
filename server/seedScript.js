
const DB = require('/Users/sinamb/Documents/Programs/SinaService/database');
const faker = require('faker');

function createUpdates() {

  return DB.deleteUpdates()
    .then(() => {
      for (var i = 1; i < 101; i++) {
        let instance = {
          itemId: i,
          pledgeBackers: 10 + i,
          pledgeAmount: 100 + i,
          pledgeGoal: 1000 + i,
          creator: faker.name.firstName(),
          headers: [{
            headerId: faker.lorem.sentence()
          }],
          paragraphs: [{
            paraId: faker.lorem.paragraph(),
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