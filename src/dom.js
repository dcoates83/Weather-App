import { get } from "./getElement.js";
// import {  } from "module";

// ** Create Icons
function createWeeklyIcon(i, weather) {
  let check = [...i.children];
  if (check.length > 0) {
    const beGone = i.firstElementChild;
    beGone.remove();
    let div = document.createElement("div");
    div.classList.add(weather.shift(), "icon");
    i.append(div);
  } else {
    let div = document.createElement("div");
    div.classList.add(weather.shift(), "icon");
    i.append(div);
  }
  return i;
}
function createTodaysIcon(data) {
  let weatherData = data.weather[0].main;
  const mainIcon = document.querySelector(".weather-info-icon");

  let check = [...mainIcon.children];
  if (check.length > 1) {
    const beGone = document.querySelector(".bigIcon");
    beGone.remove();
    let div = document.createElement("div");
    div.classList.add(weatherData, "bigIcon");
    mainIcon.append(div);
  } else {
    let div = document.createElement("div");
    div.classList.add(weatherData, "bigIcon");
    mainIcon.append(div);
  }

  // console.log(check);
  return mainIcon;
}

// ** Change Title Location
function changeCity(weatherData) {
  const city = document.querySelector(".weather-info-city");
  city.textContent = weatherData.name;
  return city;
}
function changeCityDesc(weatherData) {
  const cityDesc = document.querySelector(".weather-info-description");
  cityDesc.textContent = weatherData.weather[0].description;
  // .charAt(0)
  // .toUpperCase();
  // weatherData.weather[0].description.slice(1);
  return cityDesc;
}

// ** Change sidebar Text
function changeFeelsLike(weatherData) {
  const text = document.querySelector("#feels-like");
  text.textContent = weatherData.main.feels_like;
  return text;
}
function changeHumidty(weatherData) {
  const text = document.querySelector("#humidity");
  text.textContent = weatherData.main.humidity + "%";
  return text;
}
function changeRainChance(weatherData) {
  const text = document.querySelector("#chance-of-rain");
  text.textContent = weatherData.minutely[0].precipitation + "mm";

  return text;
}
function changeWindSpeed(weatherData) {
  const text = document.querySelector("#wind-speed");
  text.textContent = weatherData.wind.speed + "km/h";
  return text;
}

export {
  createTodaysIcon,
  createWeeklyIcon,
  changeCity,
  changeCityDesc,
  changeFeelsLike,
  changeHumidty,
  changeRainChance,
  changeWindSpeed,
};
