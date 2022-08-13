async function getGeocode(city){
    let result = { lat:0 , lon:0};
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=984837e4bb065d95d91594622e29ca3f`,{mode:"cors"});
    const getGeocode = await response.json();
    result.lat = await getGeocode[0].lat;
    result.lon = await getGeocode[0].lon;
    return result;
}
async function getWeather(geo={lat:0,lon:0}){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=984837e4bb065d95d91594622e29ca3f`,{mode:"cors"});
    const weather = await response.json();
    console.log(weather.name);
    return weather.weather[0].main;
}
async function whatWeather(){
    let city = prompt("enter city");
    const result = await getGeocode(city);
    const weather = await getWeather(result);
    console.log(weather);
}

whatWeather();