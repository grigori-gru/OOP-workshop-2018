import debug from 'debug';
import axios from 'axios';

const log = debug('weather');


export default (services, defaultServiceName = 'serv1') =>
// eslint-disable-next-line
    async (city, serviceName = defaultServiceName, request = axios) => {
        log('Params', city, serviceName, Object.keys(services));
        const data = await services[serviceName](city, request);
        log('Data to user', data);
        return data;
    };
