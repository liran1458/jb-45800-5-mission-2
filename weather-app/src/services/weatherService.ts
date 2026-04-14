import axios from "axios";

class WeatherService {

    public async getCurrentWeather(cityName: string) {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

        const response = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(cityName)}`
        );

        return response.data;
    }

}

const weatherService = new WeatherService();

export default weatherService;