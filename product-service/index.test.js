// product-service/index.test.js
const request = require('supertest');
const app = require('./index'); // Update path as necessary

describe('Product Service API', () => {
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

  // Add more tests here as needed
});
