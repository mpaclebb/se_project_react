import "./weatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";


function WeatherCard({weatherData}) {
    const filteredOptions = weatherOptions.filter((option) => {
return (
    option.day === weatherData.isDay && 
option.condition === weatherData.condition
);
    });

let weatherOption;
if (filteredOptions.length ===0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
} else {
    const weatherOption = filteredOptions[0];
}
//const weatherOptionUrl = filteredOptions[0]?.url;
//const weatherOptionConditon = filteredOptions[0]?.condition;
//const weatheroptionDay = filteredoptions[0]?.isDay;

    return (
    <section className="weather-card">
    <p className="weather-card__temp">{weatherData.temp.F} 75 &deg; </p>
    <img 
         src={weatherOption?.url} 
         alt={`Card showing ${weatherOption?.day ? "Day" : "night"
          }time ${weatherOption?.Condition
          } weather`}
         className="weather-card__image" />
         
    </section>
    );
}

export default WeatherCard;