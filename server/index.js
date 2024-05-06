const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    
    user: 'nate',
    host: 'localhost',
    password: '@Fourdy21',
    database: 'cars'
} ) 
app.get('/cars', (req, res) => {
    db.query("SELECT * FROM car ", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});
app.get('/Viewecocar', (req, res) => {
    db.query("SELECT * FROM economiccar", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});
app.get('/Viewexpensivecar', (req, res) => {
    db.query("SELECT * FROM expensivecar", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});
app.get('/Viewluxuriouscar', (req, res) => {
    db.query("SELECT * FROM luxuriouscar", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            res.send(result);
        }
    });
});

app.post('/create', (req, res) => {
    const serialno = req.body.SerialNo; // แก้จาก req.body.serialno เป็น req.body.SerialNo
    const Brand = req.body.Brand;
    const Model = req.body.Model;
    const Price = req.body.Price;
    const OptionList = req.body.OptionList;
    const SalesPerson = req.body.SalesPerson;

    db.query("INSERT INTO car (SerialNo, Brand, Model, Price, OptionList, SalesPerson) VALUES (?, ?, ?, ?, ?, ?)",
        [serialno, Brand, Model, Price, OptionList, SalesPerson],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Internal Server Error");
            } else {
                res.send("Values inserted");
            }
        });
});
app.put('/updatecar/:serialNo', (req, res) => {
    const serialNo = req.params.serialNo; // เปลี่ยนจาก req.params.serialNo เป็น req.params.salesPerson
    const { Brand, Model, Price, OptionList, SalesPerson } = req.body;

    db.query(
        "UPDATE car SET Brand = ?, Model = ?, Price = ?, OptionList = ?, SalesPerson = ? WHERE SerialNo = ?",
        [Brand, Model, Price, OptionList, SalesPerson, serialNo],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Internal Server Error");
            } else {
                res.send("Car updated successfully");
            }
        }
    );
});

app.listen('3001',() =>{
    console.log('Server is running')
})

    
 
