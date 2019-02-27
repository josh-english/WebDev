var faker = require("faker");

for (var i = 0; i < 10; i++) {
    console.log("Product " + (i+1) + ":");
    console.log(faker.commerce.productName());
    console.log(faker.commerce.price());
}