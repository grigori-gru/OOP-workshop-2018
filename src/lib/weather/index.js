// @flow

import axios from 'axios';
import services from './services';

type Options = {
    serviceName: string,
    newServices: Array<?Object>,
    request: any,
};

const DEFAULT_SERVICE_NAME = 'metaweather';

const initClass = (req: any) => ([serviceName, Service]) => [serviceName, new Service(req)];

export default class {
    constructor({
        serviceName = DEFAULT_SERVICE_NAME,
        newServices = [],
        request = axios,
    }: Options) {
        this.defaultServiceName = serviceName;
        this.request = request;
        this.services = new Map([...services, ...newServices].map(initClass(this.request)));
    }

    getWeather(city: string, serviceName: ?string = this.defaultServiceName) {
        const service = this.services.get(serviceName);

        return service.getWeather(city);
    }
}
