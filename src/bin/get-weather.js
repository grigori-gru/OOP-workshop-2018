#!/usr/bin/env node

import program from 'commander';
import { getWeather } from '../lib';

const showMsg = city => ({ weather, temp }) => console.log(`Weather in ${city} is ${weather}. \nTemperature ${Math.round(temp)}`);

program
    .version('0.0.1')
    .description('Get weather')
    .arguments('<city>')
    .option('-s, --service <name>', 'name servise', 'serv1')
    .action(city => getWeather(city, program.service)
        .then(showMsg(city)))
    .parse(process.argv);
