const request = require('supertest');
const app = require('./app');

describe('http://localhost:8888/', () => {
  test('Responds with 200', () => {
    return request(app).get('/')
    .then(response => {
      expect(response.statusCode).toBe(200)
    })
  });

  test('response text is Hello World', () => {
    return request(app).get('/')
    .then(response => {
      expect(response.text).toEqual('Hello World');
    });
  });
});

describe('http://localhost:8888/itunes/:artist', () => {
  test('Responds with 200', () => {
    return request(app).get('/itunes/black+sabbath')
    .then(response => {
      expect(response.statusCode).toBe(200)
    })
  });

  test('Response objects contain album and song', () => {
    return request(app).get('/itunes/black+sabbath')
    .then(response => {
      expect(response.body.length <= 10).toBeTruthy();
      expect(response.body[0].album).toBeTruthy();
      expect(response.body[0].song).toBeTruthy();
    })
  });
});