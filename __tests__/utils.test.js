import { getUrl, getMiddle, makePlural } from '../src/lib/utils';

test('Test getUrl', () => {
    const type = 'json';
    const ip = '79.139.239.80';

    const expected = `http://ip-api.com/${type}/${ip}`;

    expect(getUrl(type, ip)).toEqual(expected);
});

describe('Test getMiddle', () => {
    it('Expect empty arr return undefined', () => {
        expect(getMiddle([])).toBe(undefined);
    });

    it('Expect arr with one return first', () => {
        expect(getMiddle(['el'])).toBe('el');
    });

    it('Expect arr with length 7 returns 4-th elem', () => {
        expect(getMiddle([1, 2, 3, 4, 5, 6, 7])).toBe(4);
    });
});


describe('Test makePlural', () => {
    it('Expect empty str return symbol', () => {
        expect(makePlural('', 's')).toBe('s');
    });

    it('Expect str without last equal symbol return str', () => {
        expect(makePlural('str', 's')).toBe('strs');
    });

    it('Expect str with last equal symbol return str', () => {
        expect(makePlural('str', 'r')).toBe('str');
    });
});
