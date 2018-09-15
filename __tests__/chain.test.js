import { stub } from 'sinon';
import { chain } from '../src/lib';

const readdirStub = stub();

const fsStub = {
    readdir: readdirStub,
};

describe('Test chain', () => {
    beforeEach(() => {
        readdirStub.reset();
    });

    it('Expect chain returns upperCase filename', async () => {
        const dirName = '/some/dir';
        readdirStub.withArgs(dirName)
            .resolves(['file1', '.file', 'file3', 'files']);

        const res = await chain(dirName, fsStub);
        expect(res).toBe('FILE3S');
    });
});
