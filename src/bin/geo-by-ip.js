#!/usr/bin/env node

import program from 'commander';
import { Location } from '../lib';

const location = new Location();

const showMsg = ({ city, country }) => console.log(`City is ${city}. Country is ${country}`);

program
    .version('0.0.1')
    .description('Get location')
    .arguments('<ip>')
    .action(ip => location.getGeo(ip).then(showMsg))
    .parse(process.argv);
