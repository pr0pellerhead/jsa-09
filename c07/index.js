const config = require('./pkg/config');
require('./pkg/db');
const express = require('express');
const bodyParser = require('body-parser');
const users = require('./handlers/users');

const api = express();
api.use(bodyParser.json());

api.get('/api/v1/users', users.getAll);
api.get('/api/v1/users/:id', users.getOne);
api.post('/api/v1/users', users.create);
api.put('/api/v1/users/:id', users.update);
api.patch('/api/v1/users/:id', users.updatePartial);
api.delete('/api/v1/users/:id', users.remove);

api.listen(config.get('server').port, err => {
    if(err){
        console.log(err);
    }
    console.log('Server successfully started on port', config.get('server').port);
});