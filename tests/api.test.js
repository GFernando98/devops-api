const request = require('supertest');
const app = require('../src/index');

describe('Notes API', () => {
  it('should return empty array initially', async () => {
    const res = await request(app).get('/notes');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('should create a new note', async () => {
    const res = await request(app).post('/notes').send({ content: 'Test note' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.content).toBe('Test note');
  });

  it('should delete a note', async () => {
    await request(app).post('/notes').send({ content: 'Note to delete' });
    const res = await request(app).delete('/notes/1');
    expect(res.statusCode).toBe(204);
  });
});