import debug from 'debug';
import axios from 'axios';

const log = debug('weather');


export default async (city, service, request = axios) => {
    log('Params', city, service);
    const data = await service(city, request);
    log('Data to user', data);
    return data;
};
