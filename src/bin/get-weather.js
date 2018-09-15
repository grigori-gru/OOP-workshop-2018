#!/usr/bin/env node

import program from 'commander';
import { getWeather } from '../lib';

const showMsg = city => ({ weather, temp }) => console.log(`Weather in ${city} is ${weather}. \nTemperature ${Math.round(temp)}`);

program
    .version('0.0.1')
    .description('Load page.')
    .option('--service')
    .arguments('<service_name> <city>')
    .action((service, city) => getWeather(service, city)
        .then(showMsg(city)));

program.parse(process.argv);
