#!/usr/bin/env node

import program from 'commander';
import { weather } from '../lib';

const showMsg = city => ({ weather: w, temp }) => console.log(`Weather in ${city} is ${w}. \nTemperature ${Math.round(temp)}`);

program
    .version('0.0.1')
    .description('Get weather')
    .arguments('<city>')
    .option('-s, --service <name>', 'name servise', 'serv1')
    .action(city => weather.getWeather(city, program.service)
        .then(showMsg(city)))
    .parse(process.argv);
