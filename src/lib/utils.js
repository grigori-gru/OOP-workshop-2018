// @flow

const BASE_URL = 'http://ip-api.com';

export default (...params) => [BASE_URL, ...params].join('/');
