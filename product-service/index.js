const express = require('express');
const app = express();
const port = process.env.PORT || 3001;  // Allow dynamic port assignment

let products = [{ id: 1, name: "Product A", price: 100 }];

app.use(express.json()); // To parse JSON bodies

// Get list of products
app.get('/products', (req, res) => {
    res.json(products);
});

// Add a new product
app.post('/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length + 1;  // Simple ID assignment logic
    products.push(newProduct);
    res.status(201).json(newProduct);  // Respond with the newly added product
});

app.listen(port, () => {
    console.log(`Product service running on http://localhost:${port}`);
});

module.exports = app;  // Export the app for testing purposes
