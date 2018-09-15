import { stub } from 'sinon';
import { getGeo } from '../src/lib';

describe('Test get-geo', () => {
    const getStub = stub();
    const requestStub = {
        get: getStub,
    };

    const ip = '1.1779.9939';
    const BASE_URL = 'http://ip-api.com/json';
    const url = `${BASE_URL}/${ip}`;

    const city = 'Moscow';
    const country = 'Russia';

    const data = {
        as: 'AS25513 OJS Moscow city telephone network',
        city,
        country,
        countryCode: 'RU',
        isp: 'OJS Moscow city telephone network',
        lat: 55.7522,
        lon: 37.6156,
        org: 'Moscow Local Telephone Network (OAO MGTS)',
        query: '79.139.239.80',
        region: 'MOW',
        regionName: 'Moscow',
        status: 'success',
        timezone: 'Europe/Moscow',
        zip: '129344',
    };

    it('Expect get-geo returns {country, city}', async () => {
        getStub.withArgs(url).resolves({ data });
        const res = await getGeo(ip, requestStub);
        expect(res).toEqual({ city, country });
    });
});
