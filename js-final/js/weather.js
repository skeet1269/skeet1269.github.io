const cityid = "4066811";
const APPID = "5739b5e3d3fc1d5a757317dd290411fc"

let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4066811&appid=5739b5e3d3fc1d5a757317dd290411fc&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById("Conditions").textContent = jsObject.weather[0].main;
    document.getElementById("Current").textContent = Math.round(jsObject.main.temp);
    document.getElementById("Humidity").textContent = jsObject.main.humidity;
    
  });

  /*const lat = "33.29";
  const lon = "86.84";
  const APPID = "5739b5e3d3fc1d5a757317dd290411fc"
  
  let apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.29&lon=-86.84&exclude=hourly,daily&appid=739b5e3d3fc1d5a757317dd290411fc";
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      //console.log(jsObject);
      document.getElementById("Conditions").textContent = jsObject.weather[0].main;
      document.getElementById("Current").textContent = Math.round(jsObject.main.temp);
      document.getElementById("Humidity").textContent = jsObject.main.humidity;
      
    });*/  