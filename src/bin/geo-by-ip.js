#!/usr/bin/env node

import getGeoData from '../lib';

const ip = process.argv[process.argv.length - 1];

getGeoData(ip)
    .then(({ city, country }) => console.log(`City is ${city}. Country is ${country}.`));
