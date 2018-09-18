// @flow

import axios from 'axios';
import services from './services';

type Options = {
    serviceName: string,
    newServices: Array<?Object>,
    request: any,
};

const DEFAULT_SERVICE_NAME = 'metaweather';

export default class {
    constructor({
        serviceName = DEFAULT_SERVICE_NAME,
        newServices = [],
        request = axios,
    }: Options) {
        this.defaultServiceName = serviceName;
        this.request = request;
        this.services = new Map([...services, ...newServices]);
        this.initedServices = new Map();
    }

    memo(name: string) {
        if (this.initedServices.has(name)) {
            return this.cash.get(name);
        }
        const Service = this.services.get(name);
        const service = new Service(this.request);
        this.initedServices.set(name, service);

        return service;
    }

    getWeather(city: string, serviceName: ?string = this.defaultServiceName) {
        if (this.services.get(serviceName)) {
            return this.memo(serviceName).getWeather(city);
        }
        console.warn(`Unknown weather service: "${serviceName}". Using default service.`);

        return this.memo(DEFAULT_SERVICE_NAME).getWeather(city);
    }
}
