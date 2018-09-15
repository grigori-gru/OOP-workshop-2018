// @flow

import debug from 'debug';
import axios from 'axios';
import { getUrl } from '../utils';
import getParsedData from './parser';

const log = debug('request');

const BASE_URL = 'http://ip-api.com/json';

export default async (ip: string, request = axios) => {
    const url = getUrl(BASE_URL, ip);
    const { data } = await request.get(url);
    log('Data by request is', data);

    return getParsedData(data);
};
