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