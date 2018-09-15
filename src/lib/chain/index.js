// @flow

import { makePlural, getMiddle } from '../utils';
import getFiles from './get-files';

export default async (dirName: string) => {
    const files = await getFiles(dirName);
    const sortedFiles = files
        .filter(fileName => fileName.slice(0, 1) !== '.')
        .sort();

    const middle = getMiddle(sortedFiles);
    console.log(middle);

    return makePlural(middle, 's').toUpperCase();
};
