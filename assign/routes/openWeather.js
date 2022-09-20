var express = require("express");
var router = express.Router();
const axios = require("axios");
// const API_ID = "90a5fcdbfe63a6a832b34063adbbee98";
const API_ID = process.env.OPENWEATHER_API_KEY;
const WEATHER_URL = "https://api.openweathermap.org/data/2.5";
router.get("/", function (req, res, next) {
  let lat = req.query.lat;
  let lon = req.query.lon;
  let weather_endpoint;
  weather_endpoint = `${WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_ID}`;

  axios
    .get(weather_endpoint)
    .then((response) => {
      res.json({ data: response.data.list });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
