// @flow

import debug from 'debug';
import axios from 'axios';
import { getUrl } from '../utils';
import getParsedData from './parser';

const log = debug('request');

const BASE_URL = 'http://ip-api.com/json';

export default class {
    constructor(request: any = axios) {
        this.request = request;
    }

    async getGeo(ip: string) {
        const url = getUrl(BASE_URL, ip);
        const { data } = await this.request.get(url);
        log('Data by request is', data);

        return getParsedData(data);
    }
}
