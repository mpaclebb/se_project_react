import "./WeatherCard.css";
import React, { useContext } from "react";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
//it fails the test everytime I made the W in weathercard capitalized, what should I do?//

function WeatherCard({weatherData}) {
 const { currentTemperatureUnit }= 
 useContext((CurrentTemperatureUnitContext));

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
     weatherOption = filteredOptions[0];
}
//const weatherOptionUrl = filteredOptions[0]?.url;
//const weatherOptionConditon = filteredOptions[0]?.condition;
//const weatheroptionDay = filteredoptions[0]?.isDay;

    return (
    <section className="weather-card">
    <p className="weather-card__temp">
        
        {weatherData.temp[currentTemperatureUnit]}  
         </p>
         <img 
         src={weatherOption?.url} 
         alt={`Card showing ${weatherOption?.day ? "Day" : "night"
          }time ${weatherOption?.Condition} weather`}
         className="weather-card__image" />
         
    </section>
    );
}

export default WeatherCard;