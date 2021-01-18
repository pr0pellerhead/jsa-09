const files = require('../files');
const dataFile = `${__dirname}/../../movies.json`;

const getAll = async () => {
    let movies = await files.read(dataFile);
    return movies;
};

const getOne = async (index) => {
    let movies = await files.read(dataFile);
    if(movies[index]) {
        return movies[index];
    }
    return null;
};

const create = async (data) => {
    let movies = await files.read(dataFile);
    movies = [...movies, data];
    await files.write(dataFile, movies);
};

const update = async (index, data) => {
    let movies = await files.read(dataFile);
    if (movies[index]) {
        movies = movies.map((m, i) => {
            if(i === index) {
                return data;
            }
            return m;
        });
    }
    await files.write(dataFile, movies);
};

const updatePartial = async (index, data) => {
    let movies = await files.read(dataFile);
    if (movies[index]) {
        movies = movies.map((m, i) => {
            if (i === index) {
                return {...m, ...data};
            }
            return m;
        });
    }
    await files.write(dataFile, movies);
};

const remove = async (index) => {
    let movies = await files.read(dataFile);
    movies = movies.filter((m, i) => {
        if(i !== index) {
            return m;
        }
    });
    await files.write(dataFile, movies);
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
};