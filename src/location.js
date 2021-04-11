import { data } from "autoprefixer";
import get from "./getElement.js";
import {
  changeTodaysTempC,
  changeTodaysTempF,
  changeNWeekTempC,
  changeNWeekTempF,
  createTodaysIcon,
} from "./changeUnits.js";

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
  // console.log(lat, lon);
  const nextWeek = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts${key}&units=imperial`,
    { mode: "cors" }
  );
  const nWData = await nextWeek.json();
  // console.log(nWData);
  // console.log(data);
  changeTodaysTempF(data);
  changeNWeekTempF(nWData);
  return data;
}

function successLocation(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  changeLocation(lat, lon);
  // console.log(data);
  // return data;
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
    // Parse Data

    changeTodaysTempF(data);
    changeNWeekTempF(nWData);
    // createTodaysIcon(data.weather[0].main, get(".weather-details-icon"));
  } else {
    let weatherIcon = data.weather[0].main;
    let mainIcon = get(".weather-info-icon");
    createTodaysIcon(weatherIcon, mainIcon);
    changeNWeekTempC(nWData);
    changeTodaysTempC(data);
    // createTodaysIcon(, get(".weather-details-icon"));
  }

  return data;
}

// changeTodaysTemp();
export { changeLocation, successLocation, deniedLocation };