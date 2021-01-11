// REST API

// Application Programming Interface

// HTTP -> HyperText Transfer Protocol

// client  <---> server (nodejs)
// request <---> response

// HTTP -> GET, POST
// REST -> GET, POST, PUT, PATCH, DELETE [, OPTIONS, HEAD...]

// GET /students 
// GET /students/123
// POST /students
// DELETE /students/321
// PUT /students/235
// PATCH /students/253
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const api = express();
api.use(bodyParser.json());

api.get('/students', (req, res) => { // рута get /students
    fs.readFile('students.json', 'utf8', (err, data) => {
        if(err){
            return res.send('ERROR!');
        }
        let output = JSON.parse(data);
        res.send(output);
    })
});

api.post('/students', (req, res) => { // рута post /students
    fs.readFile('students.json', 'utf8', (err, data) => {
        if(err) {
            return res.send('ERROR READ!');
        }
        let records = JSON.parse(data);
        records = [...records, req.body];
        fs.writeFile('students.json', JSON.stringify(records), err => {
            if(err) {
                return res.send('ERROR WRITE!');
            }
            res.send('ok');
        });
    });
});


api.listen(10000, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Service successfully started on port 10000');
});

// 127.0.0.1 -> loopback address

// сите функции кои се користат во рутите да им се направи "промисификација" и да
// биде употребена формата async/await при нивно извршување

