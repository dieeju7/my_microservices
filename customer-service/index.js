const express = require('express');
const app = express();
const port = 3002;  // Use a different port to avoid conflicts with the product-service

let customers = [{ id: 1, name: "Customer A" }];

app.get('/customers', (req, res) => {
    res.json(customers);
});

// Only start the server if this file is run directly (not when imported in tests)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Customer service running on http://localhost:${port}`);
  });
}

module.exports = app;  // Export the app for testing purposes
