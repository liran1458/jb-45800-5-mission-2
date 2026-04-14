import { useEffect, useState } from "react";
import "./Home.css";
import Loader from "../../common/Loader/Loader";
import type CityModel from "../../models/cityModel";
import type WeatherModel from "../../models/weatherModel";
import type SearchHistoryModel from "../../models/searchHistoryModel";
import cityService from "../../services/cityService";
import weatherService from "../../services/weatherService";

function Home() {
    const [cities, setCities] = useState<CityModel[]>([]);
    const [weather, setWeather] = useState<WeatherModel | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        loadCities();
    }, []);

    async function loadCities() {
        try {
            setIsLoading(true);

            const allCities = await cityService.getAllCities();
            setCities(allCities);
        }
        catch (err) {
            alert("Failed to load cities");
        }
        finally {
            setIsLoading(false);
        }
    }

    async function handleSelectChange(args: React.ChangeEvent<HTMLSelectElement>) {
        try {
            const selectedCity = args.target.value;

            setIsLoading(true);

            const data = await weatherService.getCurrentWeather(`${selectedCity}, Israel`);

            const weatherData: WeatherModel = {
                country: data.location.country,
                city: data.location.name,
                temp_c: data.current.temp_c,
                conditionText: data.current.condition.text,
                wind_kph: data.current.wind_kph,
                icon: data.current.condition.icon
            };

            setWeather(weatherData);

            // 🔥 שמירה ב-localStorage
            const newHistoryItem: SearchHistoryModel = {
                dateTime: new Date().toLocaleString(),
                city: data.location.name,
                country: data.location.country
            };

            const historyFromStorage = localStorage.getItem("weatherHistory");
            const historyArray: SearchHistoryModel[] = historyFromStorage
                ? JSON.parse(historyFromStorage)
                : [];

            historyArray.push(newHistoryItem);

            localStorage.setItem("weatherHistory", JSON.stringify(historyArray));
        }
        catch (err) {
            alert("Failed to load weather");
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="Home">
            <h2>Current Weather By City</h2>

            {isLoading && <Loader />}

            <select defaultValue="" onChange={handleSelectChange}>
                <option value="" disabled>
                    Select City
                </option>

                {cities.map((city, index) => (
                    <option key={index} value={city.city_name_en}>
                        {city.city_name_he}
                    </option>
                ))}
            </select>

            {weather && (
                <div className="WeatherBox">
                    <p><strong>Country:</strong> {weather.country}</p>
                    <p><strong>City:</strong> {weather.city}</p>
                    <p><strong>Temperature:</strong> {weather.temp_c} °C</p>
                    <p><strong>Condition:</strong> {weather.conditionText}</p>
                    <p><strong>Wind:</strong> {weather.wind_kph} kph</p>
                    <img src={weather.icon} alt={weather.conditionText} />
                </div>
            )}
        </div>
    );
}

export default Home;