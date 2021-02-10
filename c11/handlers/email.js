const mailer = require('../pkg/mailer');

const send = async (req, res) => {
    // mailer.send(
    //     'bojan@beyondbasics.co', 
    //     'Welcome to Node.js', 
    //     {
    //         first_name: 'Stanko',
    //         last_name: 'Stankovski',
    //         email: 'bojan@beyondbasics.co'
    //     },
    //     'register'
    // );
    try {
        let out = await mailer.send(
            'bojan@beyondbasics.co',
            'Notification',
            {
                first_name: 'Stanko',
                subject: 'A VERY IMPORTANT THING',
                date: '22.02.2021',
                sender_first_name: 'Pero'
            },
            'notification'
        );
        console.log(out);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
    res.send('ok');
};

module.exports = {
    send
};