import axios from 'axios';
import getServiceUrl from './services';
import getParseData from './parser';


export default async (service, city, request = axios) => {
    const url = await getServiceUrl(request)[service](city);
    const { data } = await request.get(url);

    return getParseData[service](data);
};
