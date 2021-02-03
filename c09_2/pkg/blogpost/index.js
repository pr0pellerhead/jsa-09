const mongoose = require('mongoose');

const blogpost = mongoose.model(
    'blogpost',
    {
        title: String,
        publish_date: Date,
        content: String,
        user_id: String
    },
    'blogposts'
);

const save = async (data, uid) => {
    let b = new blogpost({...data, user_id: uid});
    return await b.save();
};

const getOne = async (id, uid) => {
    return await blogpost.findOne({_id: id, user_id: uid});
};

const getAll = async (uid) => {
    return await blogpost.find({user_id: uid});
};

const update = async (id, uid, data) => {
    return await blogpost.updateOne({_id: id, user_id: uid}, data);
};

const remove = async (id, uid) => {
    return await blogpost.deleteOne({_id: id, user_id: uid});
};

module.exports = {
    save,
    getOne,
    getAll,
    update,
    remove
};