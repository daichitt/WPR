// use commonjs
const http = require('http');
const {
    getProducts, 
    getProduct, 
    addProduct, 
    editProduct, 
    deleteProduct
} = require('./dataProvider.js');

const products = getProducts();
const server = http.createServer((req, res) => {
    const {method, url} = req;
    if(method === 'GET' && url === '/products') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(products));
    }
});