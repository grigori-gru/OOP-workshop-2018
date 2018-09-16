import debug from 'debug';
import { getUrl } from '../../utils';

const log = debug('weather');

export default async (city, request) => {
    const baseUrl = 'https://www.metaweather.com/api/location';
    const { data } = await request.get(getUrl(baseUrl, 'search'), { params: { query: city } });
    log('data', data);
    const [{ woeid }] = data;

    const { data: weatherData } = await request.get(getUrl(baseUrl, woeid));

    const [{ weather_state_name: weather, the_temp: temp }] = weatherData.consolidated_weather;

    return { weather, temp };
};
