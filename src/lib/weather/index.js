// @flow

import axios from 'axios';
import services from './services';

type Options = {
    serviceName: ?string,
    newServices: ?Array<Object>,
    request: ?any,
};

const DEFAULT_SERVICE_NAME = 'metaweather';

export default class {
    constructor({ serviceName, newServices, request }: Options) {
        this.defaultServiceName = serviceName || DEFAULT_SERVICE_NAME;
        this.services = (newServices || [])
            .reduce((acc: object, val: object) => ({ ...acc, ...val }), services);
        this.request = request || axios;
    }

    getWeather(city: string, serviceName: ?string = this.defaultServiceName) {
        const service = new this.services[serviceName](this.request);

        return service.getWeather(city);
    }
}
