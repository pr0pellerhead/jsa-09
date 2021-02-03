const cfg = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');

const blogposts = require('./handlers/blogposts');

const api = express();

api.use(bodyParser.json());
api.use(jwt({
    secret: cfg.get('server').jwt_key,
    algorithms: ['HS256']
}));
api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad Token');
    }
});

api.post('/api/v1/blogposts', blogposts.save);
api.get('/api/v1/blogposts', blogposts.getAll);
api.get('/api/v1/blogposts/:id', blogposts.getOne);
api.put('/api/v1/blogposts/:id', blogposts.update);
api.delete('/api/v1/blogposts/:id', blogposts.remove);

api.listen(cfg.get('server').port, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Server successfully started on port', cfg.get('server').port);
})
