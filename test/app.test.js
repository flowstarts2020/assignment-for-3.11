const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  test('It should return "Hello, world!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, world!');
  });
});
