const express = require('express')
const app = express();
const mysql = require("mysql");
const cors = require('cors');
require('dotenv').config();
app.use(cors());

const PORT = process.env.PORT || 3002;

// app.use(express.json());

//db connection
console.log(process.env);
var connection = mysql.createConnection({
    host: "localhost",
    // db port
    port: 3306,

    user: "root",
    password: process.env.MYPASSWORD,
    database: "ecommerce"
});


connection.connect(function (err) {
    //callback
    if (err) {
        throw err;

    }
    console.log('Connected');
})


app.get('/api/products', (req, res) => {
    //PULL IN PRODUCTS
    connection.query("SELECT * FROM products", (err, data) => {
        if (err) res.status(403).send(err);
        res.json(data)
    })    
});


app.get('/api/contacts', (req, res) => {   
    connection.query('SELECT * from contacts', (err,data) => {
        if (err) res.status(403).send(err);
      res.send(data)
    })
    console.log('added to contacts')

  });

//LISTENER SET TO PORT 3002
app.listen(3002, () => {
    console.log(`Serving running on port ${PORT}.`);
})

