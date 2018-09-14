import getUrl from '../src/lib/utils';

test('Test getParser', () => {
    const type = 'json';
    const ip = '79.139.239.80';

    const expected = `http://ip-api.com/${type}/${ip}`;

    expect(getUrl(type, ip)).toEqual(expected);
});
