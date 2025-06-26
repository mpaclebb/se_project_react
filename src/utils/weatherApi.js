
export const getweather = ({latitude, longitude}, APIKey) => {
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKey}`
    ).then((res) => {
    if (res.ok) {
        return res.json()
    } else {
        return Promise.reject(`Error: $(res.status)`);
    }
});
};

export const filterWeatherData = (data) => {
    const result ={};
    result.city = data.name;
    result.temp = {
    F: `${Math.round(data.main.temp)}ºF`,
    C: `${Math.round(((data.main.temp - 32) * 5) / 9)}ºC`,
  };

    result.type = getweathertype(data.main.F);
    result.condition = data.weather[0].main.toLowerCase();
    result.isDay= isDay(data.sys, Date.now());
    return result;
};

const isDay =({sunrise, sunset }, now) => {

return sunrise * 1000 <now && now < sunset * 1000;
};

const getweathertype = (temp) => {
 
    if (temp >= 83) {
      return "hot";
    } else if (temp >= 66) {
      return "warm";
    } else {
      return "cold";
    }
};