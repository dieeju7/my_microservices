const request = require('supertest');
const app = require('./index');  // Import the app, not the server

describe('Product Service API', () => {
  let server;

  // Start the server before all tests
  beforeAll((done) => {
    server = app.listen(3001, () => {
      console.log('Product service running on http://localhost:3001');
      done();
    });
  });

  // Close the server after all tests
  afterAll((done) => {
    server.close(() => {
      console.log('Product service closed');
      done();
    });
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
