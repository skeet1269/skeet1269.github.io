let temp = document.querySelector(".temp").innerHTML;
let speed = document.querySelector(".wind-speed").innerHTML;

if ((temp <= 50) && (speed >3)) {
    let result = windChill(temp, speed)
    document.querySelector(".wind-chill").innerHTML = result.toFixed(0);

}

else {
    document.querySelector(".wind-chill").innerHTML = "N/A";
}

function windChill(temp, speed) {
    let f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    return f
}

