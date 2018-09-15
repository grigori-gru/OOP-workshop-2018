export default {
    serv1: ({ consolidated_weather: arrWeather }) => {
        const [{ weather_state_name: weather, the_temp: temp }] = arrWeather;

        return { weather, temp };
    },
    serv2: data => data,
};
