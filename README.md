# OOP-workshop-2018
Training repo for workshop 14.09.2018

[![Build Status](https://travis-ci.org/grigori-gru/oop-workshop-2018.svg?branch=master)](https://travis-ci.org/grigori-gru/oop-workshop-2018)

# How to use

## Weather service

### run command in root of project
- `npx babel-node -- src/bin/get-weather.js --service <metaweather_or_serv2> <city_name>`

### add new service
```
    // Choose serviceName as default.
    // Services should be collection of services {serviceName: service}
    const weather = new Weather(serviceName, services);

    // Getting weather
    const weather =  weather.getWeather(city);

    // To use another just add as param
    const weatherData = weather.getWeather(city, someOtherServiceName);
```