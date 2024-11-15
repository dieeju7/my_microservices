const express = require('express');
const app = express();
const port = process.env.PORT || 3002; 

let customers = [{ id: 1, name: "Customer A", email: "customerA@example.com" }];

app.use(express.json()); // To parse JSON bodies

// Get list of customers
app.get('/customers', (req, res) => {
  res.json(customers);
});

// Add a new customer
app.post('/customers', (req, res) => {
  const newCustomer = req.body;
  newCustomer.id = customers.length + 1;  // Simple ID assignment logic
  customers.push(newCustomer);
  res.status(201).json(newCustomer);  // Respond with the newly added customer
});

const server = app.listen(port, () => {
  console.log(`Customer service running on http://localhost:${port}`);
});

module.exports = { app, server };  // Export the app and server for testing purposes
