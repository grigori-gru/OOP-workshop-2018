// @flow

import debug from 'debug';
import { getUrl } from '../../utils';

const log = debug('weather');
const BASE_URL = 'https://www.metaweather.com/api/location';

export default async (city: string, request) => {
    const { data } = await request.get(getUrl(BASE_URL, 'search'), { params: { query: city } });
    log('data', data);

    const [{ woeid }] = data;

    const { data: weatherData } = await request.get(getUrl(BASE_URL, woeid));

    const [{ weather_state_name: weather, the_temp: temp }] = weatherData.consolidated_weather;

    return { weather, temp };
};
