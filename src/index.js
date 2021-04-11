import "./style.scss";
import { getDate, setTime } from "./date.js";
import { successLocation, deniedLocation } from "./location.js";
import get from "./getElement.js";
import { changeCity } from "./dom.js";

function getLocation() {
  const weatherData = navigator.geolocation.getCurrentPosition(
    successLocation,
    deniedLocation
  );
  // console.log(weatherData);
}

// const weatherData = getLocation();

// setInterval(setTime, 1000);
window.addEventListener("DOMContentLoaded", getLocation());
