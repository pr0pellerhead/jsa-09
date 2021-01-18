const express = require('express');
const bodyParser = require('body-parser');
const files = require('./files');

const api = express();

api.use(bodyParser.json());

api.get('/students', async (req, res) => {
    try {
        let students = await files.fileRead('students.json');
        res.send(students);
    } catch(err) {
        console.log(err);
        res.send('error');
    }
});

api.post('/students', async (req, res) => {
    try {
        let students = await files.fileRead('students.json');
        students = [...students, req.body];
        await files.fileWrite('students.json', JSON.stringify(students));
        res.send('ok');
    } catch (err) {
        console.log(err);
        res.send('error');
    }
});

api.put('/students/:id', async (req, res) => {
    try {
        // тука податоците сеуште се наоѓаат во фајлот
        let students = await files.fileRead('students.json'); // податоците ги вчитуваме од фајлот во променливата students
        if (students[req.params.id]){
            students[req.params.id] = req.body; // елементот со реден број (req.params.id) замени го со вредноста која е испратена во req.body
        } else {
            throw('Record does not exist'); // прекини со извршување на код и оди директно во catch блокот
        }
        await files.fileWrite('students.json', JSON.stringify(students)); // запиши ги промените во фајлот
        res.send('ok');
    } catch(err) {
        console.log(err);
        res.send('error');
    }
});

api.delete('/students/:id', async (req, res) => {
    try {
        // тука податоците сеуште се наоѓаат во фајлот
        let students = await files.fileRead('students.json'); // податоците ги вчитуваме од фајлот во променливата students
        if (students[req.params.id]) {
            students = students.filter((s, i) => {
                return i != req.params.id;
            });
        } else {
            throw ('Record does not exist'); // прекини со извршување на код и оди директно во catch блокот
        }
        await files.fileWrite('students.json', JSON.stringify(students)); // запиши ги промените во фајлот
        res.send('ok');
    } catch (err) {
        console.log(err);
        res.send('error');
    }
});

api.patch('/students/:index', async (req, res) => {
    try {
        // тука податоците сеуште се наоѓаат во фајлот
        let students = await files.fileRead('students.json'); // податоците ги вчитуваме од фајлот во променливата students
        if (students[req.params.index]) {
            students[req.params.index] = {...students[req.params.index], ...req.body}; 
            // req.params.index = 1
            // req.body = {gpa: 9.81}
            // students[req.params.index] = {}
            // students[req.params.index] = {...students[req.params.index]}
            // students[req.params.index] = {name: "Ivana Ivanovska", gpa: 6.9}
            // students[req.params.index] = {name: "Ivana Ivanovska", gpa: 6.9, ...req.body}
            // students[req.params.index] = {name: "Ivana Ivanovska", gpa: 6.9, gpa: 9.81}
            // students[req.params.index] = {name: "Ivana Ivanovska", gpa: 9.81}
        } else {
            throw ('Record does not exist'); // прекини со извршување на код и оди директно во catch блокот
        }
        await files.fileWrite('students.json', JSON.stringify(students)); // запиши ги промените во фајлот
        res.send('ok');
    } catch (err) {
        console.log(err);
        res.send('error');
    }
});

api.listen(10000, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Service started on port 10000');
});

/*

[a, b, c, d]

// PUT /students/2
// g

[a, b, g, d]

*/


// map
// reduce
// sort // [1, 3, 5, 8, 2, 5, 3, 4]
// sort // [{name: 'Pero', lname: 'Perovski'}, {lname: 'Ivanovski', name: 'Ivan'},]

// map
// forEach

// reduce


// API CRUD (Create Read Update Delete)
// ДОМАШНО: Истово што го направивте на часов, но за филмови!