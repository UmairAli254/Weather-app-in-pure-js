"use strict";

//Constants
const cityCountry = document.getElementById("cityCountry");
const temp = document.getElementById("temp");
const minMaxTamp = document.getElementById("minMaxTamp");
let dating = document.getElementById("dating");
let fA = document.getElementById("fontAwesome");
const url = "https://api.openweathermap.org/data/2.5/weather?q=lahore&units=metric&appid=a683d57a0e7c942516aac20f5efa82ab";

//Show Date
let date = new Date();
let mArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let month = mArr[date.getMonth()];
let AP = () => {
    let hours = date.getHours();
    if (hours >= 12)
        return "PM";
    else
        return "AM";
}
dating.innerHTML = `${day[date.getDay()]} | ${mArr[date.getMonth()]} ${date.getDate()} | ${date.getHours() % 12}:${date.getMinutes()}${AP()}`;


//Fetch API
let getData = async () => {
    let response = await fetch(url);
    let data = await response.json();

    cityCountry.innerHTML = `${data.name},${data.sys.country}`;
    temp.innerHTML = data.main.temp + "&deg;C";
    minMaxTamp.innerHTML = `Min ${data.main.temp_min} &deg;C | Max ${data.main.temp_max} &deg;C`;

    //fontAwesome Icon according to the temp mode
    let tempMode = data.weather[0].main;
    if (tempMode === "Clear")
        fA.innerHTML = `<i class="fas fa-sun" style="color: #eccc68"></i>`;
    else if (tempMode === "Cloud")
        fA.innerHTML = `<i class="fas fa-cloud" style="color: white"></i>`;
    else if (tempMode === "Rain")
        fA.innerHTML = `<i class="fas fa-cloud-rain" style="color: white"></i>`;
    else if (tempMode === "Smoke")
        fA.innerHTML = `<i class="fas fa-smog" style="color: white"></i>`;
    else
        fA.innerHTML = `<i class="fas fa-sun" style="color: #eccc68"></i>`;

}

getData();