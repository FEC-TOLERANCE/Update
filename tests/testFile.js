// import DB from "../database/index";
// import server from "../server/index";
// import client from "../client/source/index";
var req = require("supertest")


describe('API communication: ', () => {
  var app = req('http://localhost:3007');

  describe('GET requests to /updates/:projectId', () => {

    test('The database should get seeded with 100 entries', () => {
      app.get('/updates/100')
        .then(response => {
          expect(response.status).toBe(200);
        })
    });

    test('Returns a 200 response for valid projectIDs', () => {
      app.get('/updates/99')
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

    test('400 error for invalid projectIds', () => {
      app.get('/updates/101')
        .then(response => {
          expect(response.status).toBe(400);
        })
    });
  });
});