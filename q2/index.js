const express = require('express');
const app = express();
const path = require('path');
const bparser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', '.');
app.use(bparser.urlencoded());

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "person";
    }
    if (!age) {
        age = 1;
    }
    res.redirect(`/output?name=${name}&age=${age}`);
});

app.get('/output', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
       name = "person";
    }
    if (!age) {
       age = 1;
    }
    res.render('output', {name: name, age: age});
});

app.listen(3000);