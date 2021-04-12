import { data } from "autoprefixer";
import get from "./getElement.js";
import {
  changeTodaysTempC,
  changeTodaysTempF,
  changeNWeekTempC,
  changeNWeekTempF,
} from "./changeUnits.js";
import {
  createTodaysIcon,
  createWeeklyIcon,
  changeCity,
  changeCityDesc,
  changeFeelsLike,
  changeHumidty,
  changeRainChance,
  changeWindSpeed,
} from "./dom.js";
// Set Default location
async function deniedLocation() {
  const city = "Chicago";
  const key = "&appid=43947b9200f7092a05e71ceda1f7f280";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=`;
  let response = await fetch(`${url}${city}${key}&units=imperial`, {
    mode: "cors",
  });
  const data = await response.json();
  const lat = await data.coord.lat;
  const lon = await data.coord.lon;
  // This one is for long range forcasts
  const nextWeek = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts${key}&units=imperial`,
    { mode: "cors" }
  );
  const nWData = await nextWeek.json();
  // Parse Data
  storeValue();
  changeCity(data);
  changeCityDesc(data);
  changeWindSpeed(data);
  changeRainChance(nWData);
  changeHumidty(data);
  changeFeelsLike(data);
  createTodaysIcon(data);
  changeTodaysTempF(data);
  changeNWeekTempF(nWData);
  return { data };
}

function successLocation(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // Values stored for Searching by location
  storeValue();
  changeLocation(lat, lon);
  return { data };
}
function storeValue() {
  const btn = document.querySelector(".btn");
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const form = document.querySelector(".form");
    const search = document.querySelector("#search").value;
    searchLocation(search);
    form.reset();
  });
}

async function searchLocation(value) {
  const key = "&appid=43947b9200f7092a05e71ceda1f7f280";
  if (!value == "") {
    let city = value;
    let api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}${key}`,
      { mode: "cors" }
    );
    let data = await api.json();
    let location = data.cod;
    if (location == 404) {
      const error = document.querySelector(".error-msg");
      error.style.display = "inline";
    } else {
      let lat = data.coord.lat;
      let lon = data.coord.lon;
      changeLocation(lat, lon);
    }
  }

  return location;
}

// Change location  lat and lon
async function changeLocation(lat, lon) {
  const key = "&appid=43947b9200f7092a05e71ceda1f7f280";
  let todayApi = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}${key}&units=metric`,
    { mode: "cors" }
  );
  const nextWeek = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts${key}&units=metric`,
    { mode: "cors" }
  );
  // Fetch this current data and weekly Data
  const nWData = await nextWeek.json();
  let data = await todayApi.json();
  if (data.sys.country == "US") {
    todayApi = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}${key}&units=imperial`,
      { mode: "cors" }
    );
    data = await todayApi.json();
    // Parse Data and Create Dom Items

    changeWindSpeed(data);
    changeRainChance(nWData);
    changeHumidty(data);
    changeFeelsLike(data);
    changeCity(data);
    changeCityDesc(data);
    changeTodaysTempF(data);
    changeNWeekTempF(nWData);
    createTodaysIcon(data);
  } else {
    changeWindSpeed(data);
    changeRainChance(nWData);
    changeHumidty(data);
    changeFeelsLike(data);
    changeCity(data);
    changeCityDesc(data);
    createTodaysIcon(data);
    changeNWeekTempC(nWData);
    changeTodaysTempC(data);
  }

  return { data };
}

export { changeLocation, successLocation, deniedLocation };
