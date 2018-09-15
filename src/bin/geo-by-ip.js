#!/usr/bin/env node

import { chain, getGeo } from '../lib';

const ip = process.argv[process.argv.length - 1];

getGeo(ip)
    .then(({ city, country }) => console.log(`City is ${city}. Country is ${country}.`));

console.log(__dirname);

chain(__dirname).then(res => console.log('Chain result is ', res));
