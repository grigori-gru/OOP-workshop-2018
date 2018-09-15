import nock from 'nock';
import getRequest from '../src/lib/get-geo/request';

describe('Test requests', () => {
    const url = 'http://example';
    const data = { data: 'OK' };

    beforeEach(() => {
        nock(url)
            .get('/')
            .reply(200, data);
    });

    test('Expect request to be ok', async () => {
        const res = await getRequest(url);

        expect(res).toEqual(data);
    });
});
