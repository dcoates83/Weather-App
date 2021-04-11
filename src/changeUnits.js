import get from "./getElement.js";
function changeTodaysTempC(data) {
  const todaysTemp = get(".weather-info-temperature");
  console.log(data.weather[0].main);
  todaysTemp.textContent = data.main.temp + " °C";
}
function changeTodaysTempF(data) {
  const todaysTemp = get(".weather-info-temperature");
  console.log(data.weather[0].main);
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
    createIcon(i, weather);
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
// ** Create Icons
function createWeeklyIcon(i, weather) {
  let div = document.createElement("div");
  div.classList.add(weather.shift(), "icon");
  i.append(div);
  return i;
}
function createTodaysIcon(weather, html) {
  let div = document.createElement("div");
  div.classList.add(weather, "bigIcon");
  html.append(div);

  return html;
}

export {
  changeTodaysTempC,
  changeTodaysTempF,
  changeNWeekTempC,
  changeNWeekTempF,
  createTodaysIcon,
};
