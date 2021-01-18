const mongoose = require('mongoose');

const Actors = mongoose.model(
    'actors',
    {
        first_name: String,
        last_name: String
    },
    'actors'
);

const getAll = async () => {
    let actors = await Actors.find({});
    return actors;
};

const getOne = async (id) => {
    let actors = await Actors.findOne({_id: id});
    return actors;
};

const create = async (data) => {
    let actor = new Actors(data);
    await actor.save();
};

const update = async (id, data) => {
    await Actors.updateOne({_id: id}, data);
};

const updatePartial = async (id, data) => {
    await Actors.updateOne({ _id: id }, data);
};

const remove = async (id) => {
    await Actors.deleteOne({_id: id});
};


module.exports = {
    getAll,
    getOne,
    create,
    update,
    updatePartial,
    remove,
};