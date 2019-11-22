
// require('../server')
// const expect = require('chai').expect;
// const request = require('request');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/ecommerce');
mongoose.connection
    .once('open', () => console.log('Good to go'))
    .on('error', (error) => {
        console.warn('Warning', error);
    });

