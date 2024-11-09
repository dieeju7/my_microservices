const request = require('supertest');
const { app, server } = require('./index');  // Import app and server

describe('Customer Service API', () => {

  // Log server start (no need to call app.listen since it's done in index.js)
  beforeAll(async () => {
    console.log(`Customer service running on http://localhost:${server.address().port}`);
  });

  // Close the server after all tests
  afterAll(async () => {
    console.log('Closing customer service');
    await server.close();
    console.log('Customer service closed');
  });

  it('should return a list of customers', async () => {
    const response = await request(app).get('/customers');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should add a new customer', async () => {
    const newCustomer = { name: 'Test Customer', email: 'testcustomer@example.com' };
    const response = await request(app).post('/customers').send(newCustomer);
    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(newCustomer);
  });
});
