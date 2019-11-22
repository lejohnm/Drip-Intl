const express = require('express')
const usersRoute = require('./routes/index.js')
const app = express();
const mysql = require("mysql");
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose')
let uri = '';
app.use(cors());

const PORT = process.env.PORT || 2702;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    uri = process.env.MONGODB_UI
} else {
    uri = process.env.MONGODB_UI
}

mongoose.set('useCreatIndex', true)
//db connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log(err || 'Connected to Mongodb')
})

//get products
app.get('/api/products', (req, res) => {
    //PULL IN PRODUCTS
    connection.query("SELECT * FROM products", (err, data) => {
        if (err) res.status(403).send(err);
        res.json(data)
    })
});


//get contacts
app.get('/api/contacts', (req, res) => {
    connection.query('SELECT * FROM contacts', (err, data) => {
        if (err) res.status(403).send(err);
        res.send(data)
        console.log(err);
    })
    console.log('added to contacts')

});


app.get('/api', (req, res) => {
    res.json({ message: "Hello" })
})

///
app.use('/api/users', usersRoute);


app.delete('/api/products', (req, res) => {
    connection.query('DELETE FROM ecommerce')
})

// app.use('*', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`)
// })

//LISTENER SET TO PORT 2702
app.listen(PORT, () => {
    console.log(`Serving running on port ${PORT}.`);
})

