const request = require('supertest');
const express = require('express');

const app = express();
let visits = 0;

app.get('/', (req, res) => {
  visits++;
  res.send(`Visit count: ${visits}`);
});

describe('GET /', () => {
  it('should return visit count', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Visit count: \d+/);
  });
});
