// @flow

import getParsedData from './parser';
import request from './request';
import getUrl from './utils';

export default async (ip: string, type: string = 'json') => {
    const url = getUrl(type, ip);
    const data = await request(url);

    return getParsedData[type](data);
};
