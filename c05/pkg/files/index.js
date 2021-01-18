const fs = require('fs');

const read = (filename) => {
    return new Promise((success, fail) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if(err) {
                return fail(err);
            }
            return success(JSON.parse(data));
        });
    });
};

const write = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, JSON.stringify(data), err => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

module.exports = {
    read, 
    write,
};