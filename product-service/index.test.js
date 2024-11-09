const request = require('supertest');
const { app, server } = require('./index');  // Import app and server

describe('Product Service API', () => {

  // Start the server before all tests
  beforeAll(async () => {
    // No need to manually call app.listen here, as it's already done in index.js
    // Just make sure Jest waits for the server to start
    console.log(`Product service running on http://localhost:${server.address().port}`);
  });

  // Close the server after all tests
  afterAll(async () => {
    console.log('Closing product service');
    await server.close();
    console.log('Product service closed');
  });

  it('should return a list of products', async () => {
    const response = await request(app).get('/products');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should add a new product', async () => {
    const newProduct = { name: 'Test Product', price: 10 };
    const response = await request(app).post('/products').send(newProduct);
    expect(response.statusCode).toBe(201);
    expect(response.body).toMatchObject(newProduct);
  });
});
