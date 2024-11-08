// use commonjs
const http = require('http');
const {
    getProducts, 
    getProduct, 
    addProduct, 
    editProduct, 
    deleteProduct, findProductById
} = require('./dataProvider.js');

const products = getProducts();
const server = http.createServer((req, res) => {
    const {method, url} = req;
    if(method === 'GET' && url === '/products') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(products));
    }

    // get by ID
    if(method === 'GET' && url.startsWith('/products')) {
        id = url.split('/')[2];
        const product = findProductById(id);
        if(product) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(products));

        } else {
            res.statusCode = 404;
        }

    }




    if(method === 'POST' && url === '/products') {
        let body= ""
        req.on('data', (chunk) => {})
        addProduct(req.body);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(products));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server
     running at http://localhost:${PORT}/`);
});