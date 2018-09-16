#!/usr/bin/env node

import program from 'commander';
import { Weather } from '../lib';

const showMsg = city => ({ weather: w, temp }) => console.log(`Weather in ${city} is ${w}. \nTemperature ${Math.round(temp)}`);

const weather = new Weather();

program
    .version('0.0.1')
    .description('Get weather')
    .arguments('<city>')
    .option('-s, --service <name>', 'name servise', 'metaweather')
    .action(city => weather.getWeather(city, program.service)
        .then(showMsg(city)))
    .parse(process.argv);
