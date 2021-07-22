let lat = 33.29;
let lon = 86.84;
let appid = "5739b5e3d3fc1d5a757317dd290411fc";
const apiURL = https://api.openweathermap.org/data/2.5/onecall?lat=33.29&lon=-86.84&exclude=hourly,daily&appid=5739b5e3d3fc1d5a757317dd290411fc
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let day = 0;
        const dayofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    });