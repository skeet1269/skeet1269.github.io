let cityID = 5604473;
let appid = "5739b5e3d3fc1d5a757317dd290411fc";
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=5604473&appid=5739b5e3d3fc1d5a757317dd290411fc&units=imperial"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        let day = 0;
        const dayofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    });
    