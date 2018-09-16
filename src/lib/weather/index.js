// @flow

import axios from 'axios';
import services from './services';

const DEFAULT_SERVICE_NAME = 'metaweather';

export default class {
    constructor(
        serviceName: string = DEFAULT_SERVICE_NAME,
        newServices: Array = [],
        request = axios,
    ) {
        this.defaultServiceName = serviceName;
        this.services = newServices.reduce((acc, val) => ({ ...acc, ...val }), services);
        this.request = request;
    }

    getWeather(city: string, serviceName: string | undefined = this.defaultServiceName) {
        return this.services[serviceName](city, this.request);
    }
}
