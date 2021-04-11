import get from "./getElement.js";
import { createTodaysIcon, createWeeklyIcon } from "./dom.js";

// ** Change Today Main Weather Temperature
function changeTodaysTempC(data) {
  const todaysTemp = get(".weather-info-temperature");
  todaysTemp.textContent = data.main.temp + " °C";
}
function changeTodaysTempF(data) {
  const todaysTemp = get(".weather-info-temperature");
  todaysTemp.textContent = data.main.temp + " °F";
}

// ** Weekly Change F**
function changeNWeekTempF(data) {
  const high = [
    ...document.querySelectorAll(".forecast-daily-temperature-high"),
  ];
  const low = [...document.querySelectorAll(".forecast-daily-temperature-low")];
  let max = [];
  let min = [];
  let weather = [];
  const icons = [...document.querySelectorAll(".forecast-daily-icon")];

  data.daily.forEach((i) => {
    max.push(i.temp.max);
    min.push(i.temp.min);
    weather.push(i.weather[0].main);
  });

  high.forEach((i) => {
    i.textContent = max.shift() + " °F";
  });
  low.forEach((i) => {
    i.textContent = min.shift() + " °F";
  });
  icons.forEach((i) => {
    createWeeklyIcon(i, weather);
  });
}

// ** Weekly Change C**
function changeNWeekTempC(data) {
  const high = [
    ...document.querySelectorAll(".forecast-daily-temperature-high"),
  ];
  const low = [...document.querySelectorAll(".forecast-daily-temperature-low")];
  let max = [];
  let min = [];
  let weather = [];
  const icons = [...document.querySelectorAll(".forecast-daily-icon")];

  data.daily.forEach((i) => {
    max.push(i.temp.max);
    min.push(i.temp.min);
    weather.push(i.weather[0].main);
    // maybe add description
  });

  high.forEach((i) => {
    i.textContent = max.shift() + " °C";
  });
  low.forEach((i) => {
    i.textContent = min.shift() + " °C";
  });
  icons.forEach((i) => {
    createWeeklyIcon(i, weather);
  });
}

export {
  changeTodaysTempC,
  changeTodaysTempF,
  changeNWeekTempC,
  changeNWeekTempF,
  createTodaysIcon,
};
