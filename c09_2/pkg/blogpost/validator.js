const { Validator } = require('node-input-validator');

const blogpostSchema = {
    title: 'required',
    content: 'required'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let res = await v.check();
    if (!res) {
        throw v.errors;
    }
    return res;
};

module.exports = {
    blogpostSchema,
    validate,
};
