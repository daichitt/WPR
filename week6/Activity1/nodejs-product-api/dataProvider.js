const products = require('./ products.json');
console.log(products);


const getProducts =  () => {
    return products
}
exports.getProducts = getProducts;


const getProduct = (id) => {
    return products.find(product => product.id === id);
}
exports.getProduct = getProduct;

const addProduct = (product) => {
    products.push(product);
}
exports.addProduct = addProduct;

const editProduct = (id, updatedProduct) => {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
    }
}
exports.editProduct = editProduct;

const deleteProduct = (id) => {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products.splice(index, 1);
    }
}
exports.deleteProduct = deleteProduct;