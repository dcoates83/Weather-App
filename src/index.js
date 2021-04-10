import "./style.scss";

const location = async () => {
  const key = "&appid=43947b9200f7092a05e71ceda1f7f280";
};

async function deniedLocation() {
  const city = "Belgium";
  const key = "&appid=43947b9200f7092a05e71ceda1f7f280";
  const url = "http://api.openweathermap.org/data/2.5/weather?q=";
  const response = await fetch(`${url}${city}${key}`, { mode: "cors" });
  const data = await response.json();
  console.log(data);
}

function successPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  changePosition(lat, lon);
}
async function changePosition(lat, lon) {
  const key = "&appid=43947b9200f7092a05e71ceda1f7f280";
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}${key}`;
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  console.log(data);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(successPosition, deniedLocation);
}

window.addEventListener("DOMContentLoaded", getLocation());
