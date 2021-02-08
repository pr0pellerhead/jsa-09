const express = require('express');
const weather = require('./handlers/weather');

const api = express();

api.get('/api/v1/weather/city/:city', weather.getCityWeather);
api.get('/api/v1/weather/city/:city/average', weather.getCityWeatherAverage);

api.listen(10000, err => {
    if(err) {
        return console.log(err);
    }
    console.log('Service started on port 10000');
});