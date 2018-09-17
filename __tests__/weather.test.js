import { stub } from 'sinon';
import { Weather } from '../src/lib';

const city = 'London';
const getStub = stub();
const requestStub = {
    get: getStub,
};
const weather = 'Heavy Cloud';
const temp = 19.85;

const metaweatherData = { weather, temp };

describe('Test weather', () => {
    const woeid = 44418;
    // const service = 'metaweather';
    const baseUrl = 'https://www.metaweather.com/api/location';
    const urlForLocation = `${baseUrl}/search`;
    const urlForweather = `${baseUrl}/${woeid}`;

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
        ],
    };

    it('Expect get-weather returns {country, city}', async () => {
        const w = new Weather({ request: requestStub });
        getStub
            .withArgs(urlForLocation, { params: { query: city } }).resolves({ data: cityData })
            .withArgs(urlForweather).resolves({ data });

        const res = await w.getWeather(city);
        expect(res).toEqual(metaweatherData);
    });

    // it('Expect get-weather can be added with new services', async () => {
    //     const testservData = 'some data';
    //     const testserv1 = stub();
    //     testserv1.getWeather = stub();
    //     testserv1.withArgs(city, requestStub).resolves(testservData);
    //     const services = [
    //         { testserv1 },
    //         { testserv2: 'testserv2' },
    //         { testserv3: 'testserv3' },
    //     ];
    //     const w = new Weather({
    //         serviceName: 'testserv1',
    //         newServices: services,
    //         request: requestStub,
    //     });

    //     const res = await w.getWeather(city);
    //     expect(testserv1.calledOnce).toBe(true);
    //     expect(res).toEqual(testservData);
    // });
});
