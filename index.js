const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmShop');
    console.log(" mongo connection open!");

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const express = require("express");
const app = express();
const path = require("path");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const Product = require("./models/product")

///////////////////////////////////////


// to show all products with some feature (showing by category)
app.get('/products', async (req, res) => {
    const { category } = req.query;
    // if (category) {
    //     const products = Product.find({ category: category });
    //     res.render('products/index', { products });
    // }
    // else {
    const products = await Product.find({});
    res.render('products/index', { products });
    // }

    // console.log(products);

});


// to show specific product
app.get('/products/:_id', async (req, res) => {
    const { _id } = req.params;
    const product = await Product.findById(_id);
    // console.log(product);
    res.render('products/show', { product });
});


// to create new product
app.get('/products/new', (req, res) => {
    res.render('products/new');
});

// to save to take from form and save it to datadase
app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    // console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
});


// to edit existing product
app.get('/products/:_id/edit', async (req, res) => {
    const { _id } = req.params;
    const product = await Product.findById(_id);
    res.render('products/edit', { product });
});

// to update existing product from form in edit ejs file that sends PUT request
app.put('/products/:_id', async (req, res) => {
    const { _id } = req.params;
    const product = await Product.findByIdAndUpdate(_id, req.body, { runValidators: true });
    // console.log(req.body);
    // res.send("PUTTT!!");
    res.redirect(`/products/${product._id}`);
});




// deleting product that comes from form in show ejs and other ejs files
app.delete("/products/:_id", async (req, res) => {
    const { _id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(_id);
    res.redirect('/products');
});







app.listen(3000, () => {
    console.log("app is listening on port 3000!");
})