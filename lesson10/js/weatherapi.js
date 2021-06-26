const cityid = "5604473";
const APPID = "5739b5e3d3fc1d5a757317dd290411fc"

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=5739b5e3d3fc1d5a757317dd290411fc&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const temperature = document.querySelector("#temperature");
        temperature.textContent = jsObject.main.temp.toFixed(0);
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc); 
        document.getElementById('icon').setAttribute('alt', desc);
    });


    