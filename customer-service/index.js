const express = require('express');
const app = express();
const port = 3002;

let customers = [{ id: 1, name: "John Doe", email: "john@example.com" }];

app.get('/customers', (req, res) => {
    res.json(customers);
});

app.listen(port, () => {
    console.log(`Customer service running on http://localhost:${port}`);
});
