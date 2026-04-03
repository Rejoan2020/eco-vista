const fetchWeather = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
        );
        return await response.json();
    } catch (e) {
        console.log(e.message);
    }
};

export const getWeatherData = async (lat, lon) => {
    const data = await fetchWeather(lat, lon); 
    return data?.weather[0];
};

export const getMainData = async (lat, lon) => {
    const data = await fetchWeather(lat, lon);
    return data?.main;
};

export const getWindData = async (lat, lon) => {
    const data = await fetchWeather(lat, lon);
    return data?.wind;
};

export const getAQIData = async (lat, lon) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`);
    const data = await response.json(); 
    return data?.list[0];
};