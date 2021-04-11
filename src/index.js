import "./style.scss";
import { getDate, setTime } from "./date.js";
import { successLocation, deniedLocation } from "./location.js";
import get from "./getElement.js";

function getLocation() {
  navigator.geolocation.getCurrentPosition(successLocation, deniedLocation);
}
// setInterval(setTime, 1000);
window.addEventListener("DOMContentLoaded", getLocation());
