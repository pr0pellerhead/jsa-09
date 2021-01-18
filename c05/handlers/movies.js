const movieData = require('../pkg/movies');

const getAllMovies = async (req, res) => {
    try {
        let data = await movieData.getAll();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const getOneMovie = async (req, res) => {
    try {
        let data = await movieData.getOne(req.params.id);
        if(data === null) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const createMovie = async (req, res) => {
    try {
        await movieData.create(req.body);
        res.status(201).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateMovie = async (req, res) => {
    try {
        await movieData.update(req.params.id, req.body);
        res.status(204).send(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateMoviePartial = async (req, res) => {
    try {
        await movieData.updatePartial(req.params.id, req.body);
        res.status(204).send(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const deleteMovie = async (req, res) => {
    try {
        await movieData.remove(req.params.id);
        res.status(204).send(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAllMovies,
    getOneMovie,
    createMovie,
    updateMovie,
    updateMoviePartial,
    deleteMovie,
};