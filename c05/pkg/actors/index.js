const files = require('../files');
const dataFile = `${__dirname}/../../actors.json`;

const getAll = async () => {
    let actors = await files.read(dataFile);
    return actors;
};

const getOne = async (index) => {
    let actors = await files.read(dataFile);
    if(actors[index]) {
        return actors[index];
    }
    return null;
};

const create = async (data) => {
    let actors = await files.read(dataFile);
    actors = [...actors, data];
    await files.write(dataFile, actors);
};

const update = async (index, data) => {
    let actors = await files.read(dataFile);
    if (actors[index]) {
        actors = actors.map((m, i) => {
            if(i === index) {
                return data;
            }
            return m;
        });
    }
    await files.write(dataFile, actors);
};

const updatePartial = async (index, data) => {
    let actors = await files.read(dataFile);
    if (actors[index]) {
        actors = actors.map((m, i) => {
            if (i === index) {
                return {...m, ...data};
            }
            return m;
        });
    }
    await files.write(dataFile, actors);
};

const remove = async (index) => {
    let actors = await files.read(dataFile);
    actors = actors.filter((m, i) => {
        if(i !== index) {
            return m;
        }
    });
    await files.write(dataFile, actors);
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
};