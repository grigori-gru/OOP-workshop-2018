import debug from 'debug';
import axios from 'axios';
import services from './services';

const log = debug('weather');

export default async (city, service, request = axios) => {
    log('Data to user', city, service);
    const data = await services[service](city, request);
    log('Data to user', data);

    return data;
};
