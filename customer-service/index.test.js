// customer-service/index.test.js
const request = require('supertest');
const app = require('./index'); // Update path as necessary

describe('Customer Service API', () => {
  it('should return a list of customers', async () => {
    const response = await request(app).get('/customers');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should add a new customer', async () => {
    const newCustomer = { name: 'Test Customer', email: 'test@example.com' };
    const response = await request(app).post('/customers').send(newCustomer);
    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(newCustomer);
  });

  // Add more tests here as needed
});
