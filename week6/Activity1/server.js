// use commonjs
const http = require('http');
const server = http.createServer();
const express = require('express')
const api = require('./nodejs-product-api/api.js');
const app = express()

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server
     running at http://localhost:${PORT}/`);
});

app.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
});
// app.use('/products', api);