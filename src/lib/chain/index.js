// @flow

import { promises } from 'fs';
import { makePlural, getMiddle } from '../utils';

export default async (dirName: string, fs = promises) => {
    const files = await fs.readdir(dirName);
    const sortedFiles = files
        .filter(fileName => fileName.slice(0, 1) !== '.')
        .sort();

    const middle = getMiddle(sortedFiles);
    console.log(middle);

    return makePlural(middle, 's').toUpperCase();
};
