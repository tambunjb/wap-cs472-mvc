const express = require('express');
const app = express();
const path = require('path');
const bparser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', '.');
app.use(bparser.urlencoded());

app.get('/product', (req, res) => {
    let products = [
        {
            name: 'Lenovo',
            price: 2000,
            description: 'Laptop Lenovo',
            id: 1
        },
        {
            name: 'Mac',
            price: 4000,
            description: 'Laptop Mac',
            id: 2
        }
    ];
    res.render('product', products[Math.round(Math.random()*(products.length-1))]);
});

app.post('/addToCart', (req, res) => {
    let id = req.body.id;
    console.log(id);
    res.redirect('product');
});

app.get('/shoppingCart', (req, res) => {
    let products = [
        {
            name: 'Lenovo',
            price: 2000,
            quantity: 2
        },
        {
            name: 'Mac',
            price: 4000,
            quantity: 5
        }
    ];
    res.render('shoppingcart', {products: products});
});

app.listen(3000);