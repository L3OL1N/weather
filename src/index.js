async function getGeocode(city){
    try{
        let result = { lat:0 , lon:0 };   
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=984837e4bb065d95d91594622e29ca3f`,{mode:"cors"});
        const getGeocode = await response.json();
        result.lat = await getGeocode[0].lat;
        result.lon = await getGeocode[0].lon;
        return result;
    }
    catch(e){
        console.log(e);
    }
 
}
async function getWeather(geo={lat:0,lon:0}){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=984837e4bb065d95d91594622e29ca3f`,{mode:"cors"});
    const weather = await response.json();
    console.log(weather.name);
    return weather.weather[0].main;
}
async function whatWeather(){
    const city = document.querySelector("form").elements.city.value;
    document.querySelector("h2").innerHTML =  city;
    const result = await getGeocode(city);
    const weather = await getWeather(result);
    document.querySelector("h3").innerHTML = weather;
    console.log(weather);
}

    const sumitBtn = document.querySelector("[type=button]");
    sumitBtn.addEventListener("click",whatWeather);

