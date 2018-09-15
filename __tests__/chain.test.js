import proxyquire from 'proxyquire';
import { stub } from 'sinon';

const getFilesStub = stub();
const chain = proxyquire('../src/lib/chain', {
    './get-files': getFilesStub,
});

describe('Test chain', () => {
    beforeEach(() => {
        getFilesStub.reset();
    });
    it.only('Expect chain returns upperCase filename', async () => {
        const dirName = '/some/dir';
        getFilesStub.withArgs().resolves(['file1', '.file', 'file3', 'files']);

        const res = await chain(dirName);
        expect(res).toBe('FILE3S');
    });

    it('Expect arr with one return first', () => {
        expect(chain(['el'])).toBe('el');
    });

    it('Expect arr with length 7 returns 4-th elem', () => {
        expect(chain([1, 2, 3, 4, 5, 6, 7])).toBe(4);
    });
});
