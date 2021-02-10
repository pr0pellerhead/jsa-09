const cfg = require('./pkg/config');
const express = require('express');
const bodyParser = require('body-parser');
const email = require('./handlers/email');

const api = express();

api.use(bodyParser.json());

api.post('/api/v1/mailer', email.send);

api.listen(cfg.get('server').port, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Server successfully started on port', cfg.get('server').port);
});