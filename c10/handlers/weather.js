const weather = require('openweather-apis');

let cache = {};

const getCityWeather = (req, res) => {

    let ctime = new Date().getTime();

    if (cache[req.params.city] && (ctime - cache[req.params.city].timestamp) < (30 * 1000)) {
        res.status(200).send(cache[req.params.city].data);
        return;
    }

    weather.setAPPID('');
    weather.setUnits('metric');
    weather.setCity(req.params.city);

    weather.getAllWeather(function (err, data) {
        console.log(data);
        cache[req.params.city] = {
            timestamp: new Date().getTime(),
            data: data
        };
        res.status(200).send(data);
    });
};

module.exports = {
    getCityWeather
};