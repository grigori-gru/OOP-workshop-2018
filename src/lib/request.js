// @flow

import debug from 'debug';
import axios from 'axios';

const log = debug('request');

export default async (url: string) => {
    const { data } = await axios.get(url);
    log('Data by request is', data);

    return data;
};
