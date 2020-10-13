
var req = require("supertest")


describe('API communication: ', () => {
  var app = req('http://localhost:3007');

  describe('GET requests to /updates/:projectId', () => {

    test('The database should get seeded with 100 valid entries', () => {
      app.get('/updates/100')
        .then(response => {
          expect(response.status).toBe(200);
        })
    });

    test('The response contains a pledgeAmount that is 100 points above the projectId', () => {
      app.get('/updates/5')
        .then(response => {
          expect(response.body.pledgeAmount).toEqual(105);
        })
    });

    test('Non numerical itemIds are reject', () => {
      app.get('/updates/words')
        .then(response => {
          expect(response.status).toEqual(400);
        })
    });

  });
});