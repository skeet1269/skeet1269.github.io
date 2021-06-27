let cityID = 5604473;
let appid = "5739b5e3d3fc1d5a757317dd290411fc";
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=5604473&appid=5739b5e3d3fc1d5a757317dd290411fc&units=imperial"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        let day = 0;
        const dayofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes("12:00:00"));

        fiveDayForecast.forEach( x => {
            let d = new Date(x.dt_txt);

            document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
            document.getElementById('forecast${day+1}').textContent = x.main.temp;
        });

    });
    