// @flow

import getParser from '../src/lib/get-geo/parser';

const json = {
    as: 'AS25513 OJS Moscow city telephone network',
    city: 'Moscow',
    country: 'Russia',
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

test('Test getParser', () => {
    const expected = { city: 'Moscow', country: 'Russia' };
    expect(getParser.json(json)).toEqual(expected);
});
