import Product from "./classes/Product";
import User from "./classes/User";

// All the objects are using the same logger

const product = new Product();
console.log(product.getAllProducts());

product.createProduct(1, 'Rice', 500);
console.log(product.getAllProducts());

product.createProduct(2, 'Milk', 1000);
console.log(product.getAllProducts());