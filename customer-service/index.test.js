const request = require('supertest');
const app = require('./index'); // Make sure this is the correct path to your Express app

describe('Customer Service API', () => {
  let server;

  // Start the server before all tests
  beforeAll((done) => {
    server = app.listen(3002, () => {
      console.log('Customer service running on http://localhost:3002');
      done();
    });
  });

  // Close the server after all tests
  afterAll((done) => {
    server.close(() => {
      console.log('Customer service closed');
      done();
    });
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

  // Add more tests here as needed
});
