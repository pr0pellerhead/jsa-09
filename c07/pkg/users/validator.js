const { Validator } = require('node-input-validator');

const userSchema = {
    first_name: 'required|minLength:3',
    last_name: 'required|minLength:2',
    birthday: 'required',
    email: 'required|email',
};

const user = async (data, schema) => {
    let v = new Validator(data, schema);
    let res = await v.check();
    if(!res) {
        throw v.errors;
    }
    return res;
};

module.exports = {
    userSchema,
    user,
};