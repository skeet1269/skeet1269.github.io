let lat = 33.296;
let lon = 86.844;
let appid = "739b5e3d3fc1d5a757317dd290411fc";
const apiURL = https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let day = 0;
        const dayofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    });