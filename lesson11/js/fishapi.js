const cityid = "5585010";
const APPID = "5739b5e3d3fc1d5a757317dd290411fc"

let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=5739b5e3d3fc1d5a757317dd290411fc&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById("Conditions").textContent = jsObject.weather[0].main;
    document.getElementById("Current").textContent = Math.round(jsObject.main.temp);
    document.getElementById("High").textContent = Math.round(jsObject.main.temp_max);
    document.getElementById("WindChill").textContent = Math.round(jsObject.main.temp_min);
    document.getElementById("Humidity").textContent = jsObject.main.humidity;
    document.getElementById("WindSpeed").textContent = Math.round(jsObject.wind.speed);
  });