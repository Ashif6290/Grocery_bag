const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand');

 
const p  = new Product({
    name: 'Grape',
    price: 1.99,
    category: 'fruit'
})

p.save()
    .then(() => {
        console.log('Product saved successfully.');
        console.log(p)
    })
    .catch(error => {
        console.error('Error saving movie:', error);
    });

const seedProducts = [
    {
        name: 'Apple',
        price: 10,
        category: 'fruit'
    },
    {
        name: 'Carrot',
        price: 12,
        category: 'vegetable'
    },
    {
        name: 'cucumber',
        price: 8,
        category: 'vegetable'
    },
    {
        name: 'panner',
        price: 30,
        category: 'dairy'
    },
    {
        name: 'lemon',
        price: 3,
        category: 'fruit'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
