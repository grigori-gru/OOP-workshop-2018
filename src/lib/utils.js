// @flow

const BASE_URL = 'http://ip-api.com';

export const getUrl = (...params) => [BASE_URL, ...params].join('/');

export const getMiddle = (arr: Array) => {
    const middleIndex = Math.floor(arr.length / 2);

    return arr[middleIndex];
};

export const makePlural = (str: string = '', symbol: char) => (str.slice(-1) === symbol ? str : `${str}${symbol}`);
