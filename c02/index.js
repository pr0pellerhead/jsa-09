const fs = require('fs');

// fs.writeFile('data.txt', 'HELLO WORLD 2!', err => {
//     if(err) {
//         return console.log(err);
//     }
//     console.log('successfull write');
// });

const fileWrite = (file, text) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, text, err => {
            if(err) {
                return fail(err);
            }
            return success();
        });
    });
};

// fileWrite('data2.txt', 'ZDRAVO SVETU!')
//     .then(() => {
//         console.log('Successfull file write');
//     })
//     .catch(err => {
//         console.log(err);
//     });

// ********************************************************************************

fs.readFile('data.txt', 'utf8', (err, data) => {
    if(err) {
        return console.log(err);
    }
    console.log('read from file:', data);
});

const fileRead = (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if(err) {
                return fail(err);
            }
            return success(data);
        })
    });
};

// fileRead('data.txt')
//     .then(data => {
//         console.log('promise read from file:', data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// ********************************************************************************

// fs.appendFile('data.txt', ' SOME OTHER THING!', err => {
//     if(err) {
//         return err;
//     }
//     console.log('flat append finished!');
// });

const fileAppend = (file, text) => {
    return new Promise((success, fail) => {
        fs.appendFile(file, text, err => {
            if(err) {
                return fail(err);
            }
            return success();
        });
    });
};

// fileAppend('data.txt', ' BLAH BLAH BALH')
//     .then(() => {
//         console.log('successfull append');
//     })
//     .catch(err => {
//         console.log(err);
//     });

// ********************************************************************************

// fs.unlink('data.txt', err => {
//     if(err) {
//         return console.log(err);
//     }
//     console.log('delete successfull');
// });

const fileDelete = (file) => {
    return new Promise((success, fail) => {
        fs.unlink(file, err => {
            if(err) {
                return fail(err);
            }
            return success();
        });
    });
};

// fileDelete('data2.txt')
//     .then(() => {
//         console.log('delete of data2 successfull!');
//     })
//     .catch(err => {
//         console.log(err);
//     });

// ********************************************************************************

const main = async () => {
    try {
        await fileWrite('data3.txt', 'HELLOZ WORLDZ!');
        console.log('Successfullt write in data3.txt');

        let data = await fileRead('data3.txt');
        console.log('async/await read from file:', data);

        await fileAppend('data3.txt', ' append some text...');
        console.log('append finished');

        await fileDelete('data3.txt');
        console.log('delete of data3 successfully executed');
    } catch(err) {
        console.log(err);
    }
};

// читање од фајл (readFile)
// додавање во фајл (appendFile)
// бришење на фајл (unlink)

main();

// ДОМАШНА

// На 5 различни функции (кои не се учечни на час) од пакетот 'fs' да им се направи
// 'промисификација' и да се употребат со async await.

// Да се потсетите на работа со JSON (JSON.stringify, JSON.parse, итн.)

