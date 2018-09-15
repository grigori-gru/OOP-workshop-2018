import debug from 'debug';
import { getUrl } from '../utils';

const log = debug('weather');

export default request => ({
    serv1: async (city) => {
        const baseUrl = 'https://www.metaweather.com/api/location';
        const { data } = await request.get(getUrl(baseUrl, 'search'), { params: { query: city } });
        log('data', data);
        const [{ woeid }] = data;

        return getUrl(baseUrl, woeid);
    },
    serv2: city => city,
});
