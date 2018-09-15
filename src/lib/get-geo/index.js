// @flow

import { getUrl } from '../utils';
import request from './request';
import getParsedData from './parser';

export default async (ip: string, type: string = 'json') => {
    const url = getUrl(type, ip);
    const data = await request(url);

    return getParsedData[type](data);
};
