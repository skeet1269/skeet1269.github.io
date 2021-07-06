let cityID = "55607916";
let appid = "5739b5e3d3fc1d5a757317dd290411fc";
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=5607916&appid=5739b5e3d3fc1d5a757317dd290411fc&units=imperial"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        let day = 0;
        const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    
    const fiveDayForecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));

    
    fiveDayForecast.forEach( x => {
      let d = new Date(x.dt_txt);
      document.querySelector(`#day${day}`).textContent = dayofweek[d.getDay()];
      document.querySelector(`#temp${day}`).textContent = x.main.temp.toFixed(0);
      const imagesrc = 'https://openweathermap.org/img/wn/' + x.weather[0].icon + '.png';
      const desc = x.weather[0].description;
      document.querySelector(`#weathericon${day}`).setAttribute('src', imagesrc);
      document.querySelector(`#weathericon${day}`).setAttribute('alt', desc);
      day++
    });
  });