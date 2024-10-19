const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/products.routes.js')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const upload = multer();

app.use('/api/products', productRoute)

app.get('/', (req, res) => {
    res.send('Hello from Node API');
});

mongoose.connect('mongodb+srv://sohandsome060:D3PF1IEuaJqAU5pb@cluster0.nk0fw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected!');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => console.log('Connection failed'));