const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmShop');
    console.log(" mongo connection open!");

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const Product = require("./models/product");

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 5,
//     category: "fruit"
// });

// p.save()
//     .then(p => {
//         console.log(p);
//     })
//     .catch(err => {
//         console.log(err);
//     })


// const seedsProducts = [
//     {
//         name: "Alma",
//         price: 10,
//         category: "fruit"
//     },
//     {
//         name: "Arbuz",
//         price: 55,
//         category: "vegetables"
//     },
//     {
//         name: "Organic Goddes Melon",
//         price: 111,
//         category: "fruit"
//     },
//     {
//         name: "Chocolate",
//         price: 200,
//         category: "dairy"
//     }
// ];


// Product.insertMany(seedsProducts)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })

