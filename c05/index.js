require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');

const movies = require('./handlers/movies');
const actors = require('./handlers/actors');

const api = express();
api.use(bodyParser.json());

api.get('/movies', movies.getAllMovies);
api.get('/movies/:id', movies.getOneMovie);
api.post('/movies', movies.createMovie);
api.put('/movies/:id', movies.updateMovie);
api.patch('/movies/:id', movies.updateMoviePartial);
api.delete('/movies/:id', movies.deleteMovie);

api.get('/actors', actors.getAllActors);
api.get('/actors/:id', actors.getOneActor);
api.post('/actors', actors.createActor);
api.put('/actors/:id', actors.updateActor);
api.patch('/actors/:id', actors.updateActorPartial);
api.delete('/actors/:id', actors.deleteActor);

api.listen(10000, err => {
    if(err) {
        return console.log('Could not start API', err);
    }
    console.log('Server successfully started on port 10000');
});

