const express = require('express');
const app = express();
const port = 3001;

let products = [{ id: 1, name: "Product A", price: 100 }];

app.get('/products', (req, res) => {
    res.json(products);
});

// Only start the server if this file is run directly (not when imported in tests)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Product service running on http://localhost:${port}`);
  });
}

module.exports = app;  // Export the app for testing purposes
