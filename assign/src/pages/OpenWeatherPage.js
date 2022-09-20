import React from "react";
import { useEffect, useState } from "react";
import "../assets/css/OpenWeatherCss.css";
import { useLocation } from "react-router-dom";

function OpenWeatherPage() {
  let locations = [0, 0];
  const prepageData = useLocation();
  const location = prepageData.state.locations;
  const [OpenWeatherAPIData, setOpenWeatherAPIData] = useState(null);
  let lat, lon, url;
  lat = location[0];
  lon = location[1];

  useEffect(() => {
    url = `/weather?lat=${lat}&lon=${lon}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setOpenWeatherAPIData(res);
      });
  }, [OpenWeatherAPIData]);

  if (OpenWeatherAPIData !== null && OpenWeatherAPIData !== undefined) {
    if (OpenWeatherAPIData.length !== 0) {
      return (
        <div className="w3-white">
          <div className="w3-container w3-padding w3-dark-grey">
            <h4>Weather</h4>
          </div>
          <div>
            {OpenWeatherAPIData.data.map((obj) => (
              <div className="openweather-div ">
                <p className="openweather-p">{obj.dt_txt}</p>
                <p className="openweather-p">{obj.weather[0].main}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default OpenWeatherPage;
