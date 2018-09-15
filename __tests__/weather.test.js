import { stub } from 'sinon';
import { getWeather } from '../src/lib';

describe('Test get-geo', () => {
    const getStub = stub();
    const requestStub = {
        get: getStub,
    };
    const woeid = 44418;
    const service = 'serv1';
    const city = 'London';
    const baseUrl = 'https://www.metaweather.com/api/location';
    const urlForLocation = `${baseUrl}/search`;
    const urlForWheather = `${baseUrl}/${woeid}`;
    const weather = 'Heavy Cloud';
    const temp = 19.85;

    const cityData = [
        {
            title: 'London',
            location_type: 'City',
            woeid,
            latt_long: '51.506321,-0.12714',
        },
    ];

    const data = {
        consolidated_weather: [
            {
                id: 4591010118107136,
                weather_state_name: weather,
                weather_state_abbr: 'hc',
                wind_direction_compass: 'WSW',
                created: '2018-09-15T14:56:02.041287Z',
                applicable_date: '2018-09-15',
                min_temp: 12.147499999999999,
                max_temp: 20.445,
                the_temp: temp,
                wind_speed: 6.032564644848087,
                wind_direction: 245.12623817626485,
                air_pressure: 1026.83,
                humidity: 63,
                visibility: 10.64657400779448,
                predictability: 71,
            },
            {
                id: 5349840510779392,
                weather_state_name: 'Heavy Cloud',
                weather_state_abbr: 'hc',
                wind_direction_compass: 'SW',
                created: '2018-09-15T14:56:02.245254Z',
                applicable_date: '2018-09-16',
                min_temp: 13.932500000000001,
                max_temp: 22.682499999999997,
                the_temp: 21.045,
                wind_speed: 10.014363112870834,
                wind_direction: 216.49331971588634,
                air_pressure: 1020.5450000000001,
                humidity: 58,
                visibility: 12.99784259922055,
                predictability: 71,
            },
        ],
    };

    it('Expect get-geo returns {country, city}', async () => {
        getStub
            .withArgs(urlForLocation, { params: { query: city } }).resolves({ data: cityData })
            .withArgs(urlForWheather).resolves({ data });

        const res = await getWeather(service, city, requestStub);
        expect(res).toEqual({ weather, temp });
    });
});
