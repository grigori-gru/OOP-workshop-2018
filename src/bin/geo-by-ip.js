#!/usr/bin/env node

import { chain, Location } from '../lib';

const location = new Location();
const ip = process.argv[process.argv.length - 1];

location.getGeo(ip)
    .then(({ city, country }) => console.log(`City is ${city}. Country is ${country}.`));

console.log(__dirname);

chain(__dirname).then(res => console.log('Chain result is ', res));
