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

const getCityWeatherAverage = (req, res) => {
    weather.setAPPID('');
    weather.setUnits('metric');
    weather.setCity(req.params.city);
    weather.getWeatherForecastForDays(8, function (err, data) {
        if(err) {
            console.log(err);
            return res.status(500).send('Internal Server Error');
        }
        console.log(data);

        let sum = 0;

        for (let i = 0; i < data.list.length; i++) {
            sum += data.list[i].temp.day;
        }

        let avg_temp = sum / data.list.length;

        res.status(200).send({
            avg_temp
        });
    });
};

module.exports = {
    getCityWeather,
    getCityWeatherAverage
};