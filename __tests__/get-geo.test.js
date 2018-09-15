import nock from 'nock';
import { getGeo } from '../src/lib';

describe('Test get-geo', () => {
    const type = 'json';
    const ip = '1.1779.9939';
    const url = `/${type}/${ip}`;
    const BASE_URL = 'http://ip-api.com';

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

    beforeEach(() => {
        console.log(url);
        nock(BASE_URL)
            .get(url)
            .reply(200, data);
    });

    it('Expect get-geo returns {country, city}', async () => {
        const res = await getGeo(ip);
        expect(res).toEqual({ city, country });
    });
});
