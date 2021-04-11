import get from "./getElement.js";
function changeTodaysTempC(data) {
  const todaysTemp = get(".weather-info-temperature");

  todaysTemp.textContent = data.main.temp + " °C";
}
function changeTodaysTempF(data) {
  const todaysTemp = get(".weather-info-temperature");

  todaysTemp.textContent = data.main.temp + " °F";
}
// function changeNWeekTempC(data) {
//   const high = [
//     ...document.querySelectorAll(".forecast-daily-temperature-high"),
//   ];
//   const low = [...document.querySelectorAll(".forecast-daily-temperature-low")];
//   let max = [];
//   let min = [];
//   data.daily.forEach((i) => {
//     max.push(i.temp.max);
//     min.push(i.temp.min);
//   });
//   high.forEach((i) => {
//     i.textContent = max.shift() + " °C";
//   });
//   low.forEach((i) => {
//     i.textContent = min.shift() + " °C";
//   });
// }
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
    i.textContent = max.shift() + " °F";
  });
  low.forEach((i) => {
    i.textContent = min.shift() + " °F";
  });
  icons.forEach((i) => {
    createIcon(i, weather);
  });
}

function createIcon(i, weather) {
  let div = document.createElement("div");
  div.classList.add(weather.shift(), "icon");
  i.append(div);
  return i;
}

// function changeIcon(elm) {
//   const cloud = document.querySelector(".weather-info-icon");
//   let array = [
//     "Cloudy-day",
//     "Cloudy-night",
//     "Clouds",
//     "Humidity",
//     "Lightning",
//     "Mist",
//     "Moon",
//     "Rain",
//     "Snow",
//     "Sun",
//     "Wind",
//   ];
//   cloud.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 6.57 32 25.43">
//  <title>cloudy</title>
//  <path d="M32 15c0-3.073-2.5-5.572-5.573-5.572-0.15 0-0.298 0.007-0.447 0.018-1.445-1.803-3.624-2.874-5.98-2.874-2.355 0-4.535 1.070-5.98 2.874-0.148-0.012-0.298-0.018-0.449-0.018-3.070-0-5.57 2.499-5.57 5.572 0 0.322 0.043 0.631 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.605-0.565-3.068-1.479-4.25 0.911-0.994 1.479-2.302 1.479-3.75zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 0.035-0.066 0.078-0.125 0.113-0.189 0.352-0.642 0.785-1.23 1.292-1.753 1.443-1.495 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.379 0.353-0.145 0.729-0.238 1.117-0.301l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.338 1.314 0.836 1.79 1.449 0.656 0.845 1.065 1.897 1.065 3.051 0 2.762-2.238 5-5 5zM29.098 17.352c-1.155-0.841-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070-2.133 0-4.145 0.69-5.809 1.896 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.848 2.852-3.126 5.070-3.126s4.122 1.279 5.068 3.126c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.572 0 0.905-0.348 1.721-0.902 2.351z"/>
//  </svg>`;

//   // console.log(item);
//   // console.log(changeElm);
// }

export {
  changeTodaysTempC,
  changeTodaysTempF,
  changeNWeekTempC,
  changeNWeekTempF,
};