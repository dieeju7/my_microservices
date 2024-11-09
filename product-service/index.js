const express = require('express');
const app = express();
const port = 3001;

let products = [{ id: 1, name: "Product A", price: 100 }];

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Product service running on http://localhost:${port}`);
});
