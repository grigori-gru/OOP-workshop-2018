import getWeatherData from './get-weather';
import defaultServices from './services';

export const useNewService = (serviceName, service) => ({
    getWeather: getWeatherData({ ...defaultServices, [serviceName]: service }, serviceName),
    useNewService,
});

export const getWeather = getWeatherData(defaultServices);
