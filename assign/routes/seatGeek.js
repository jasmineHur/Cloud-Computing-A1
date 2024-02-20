const express = require("express");
const router = express.Router();
const axios = require("axios");
// const e = require("express");
const SEATGEEK_URL = "https://api.seatgeek.com/2/events";
const CLIENT_ID = process.env.SEATGEEK_API_KEY;
const CLIENT_SECRET = process.env.SEATGEEK_SECRET_API_KEY;
const PER_PAGE = 4;

router.get("/", function (req, res, next) {
  let seatgeekEndPoint;
  let eventType;
  let startDate;
  let endDate;
  let defaultPage = 1;

  // if query exists variables contain the values
  if (Object.keys(req.query) != 0) {
    eventType = req.query.search;
    startDate = req.query.startDate;
    endDate = req.query.endDate;
    defaultPage = req.query.page;
  }

  /*
  case1: when ending date is defined full queires are used request API data
  case2: when starting date is defined 
  case3: when eventtype is defined
  case4: evey quries are not defined it shows mixed list
  */
  if (endDate != undefined) {
    // case1
    seatgeekEndPoint = `${SEATGEEK_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&taxonomies.name=${eventType}&per_page=${PER_PAGE}&page=${defaultPage}&datetime_utc.gt=${startDate}&datetime_utc.lte=${endDate}`;
  } else if (startDate != undefined) {
    // case2
    seatgeekEndPoint = `${SEATGEEK_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&taxonomies.name=${eventType}&per_page=${PER_PAGE}&page=${defaultPage}&datetime_utc.gt=${startDate}`;
  } else if (eventType != undefined) {
    // case3
    seatgeekEndPoint = `${SEATGEEK_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&taxonomies.name=${eventType}&per_page=${PER_PAGE}&page=${defaultPage}`;
  } else {
    //case4
    seatgeekEndPoint = `${SEATGEEK_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&per_page=${PER_PAGE}&page=${defaultPage}`;
  }

  // get the data from API
  axios
    .get(seatgeekEndPoint)
    .then((response) => {
      if (response.status == 200) {
        res.json({ data: response.data.events });
      }
    })
    .catch((error) => {
      if (error.response.data.status == 403) {
        next(error);
      }
    });
});

module.exports = router;
