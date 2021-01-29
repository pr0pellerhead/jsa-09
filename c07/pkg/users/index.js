const mongoose = require('mongoose');

const User = mongoose.model(
    'users',
    {
        first_name: String,
        last_name: String,
        birthday: Date,
        email: String
    }
);

const getAll = async () => {
    return await User.find({});
};

const getOne = async (id) => {
    return await User.findOne({_id: id});
};

const create = async (data) => {
    let u = User(data);
    return await u.save();
};

const update = async (id, data) => {
    return User.updateOne({_id: id}, data);
};

const remove = async (id) => {
    return User.deleteOne({_id: id});
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove,
};