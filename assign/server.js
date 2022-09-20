const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const createError = require("http-errors");
const seatGeekRouter = require("./routes/seatGeek");
const openWeatherRouter = require("./routes/openWeather");
const port = 3000;
const host = "localhost";
// S3 setup
require("dotenv").config();
const AWS = require("aws-sdk");
const bucketName = "n10622012-counter";
const s3 = new AWS.S3({ apiVersion: "2022-09-16" });
let resultJSON;
let visitCounter = "0";

console.log("Access ID: " + process.env.AWS_ACCESS_KEY_ID);
console.log("Secret Key: " + process.env.AWS_SECRET_ACCESS_KEY);
console.log("Session Token " + process.env.AWS_SESSION_TOKEN);
console.log("API Key 1:" + process.env.SEATGEEK_API_KEY);
console.log("API Key 2:" + process.env.SEATGEEK_SECRET_API_KEY);
console.log("API Key 3:" + process.env.OPENWEATHER_API_KEY);

// create bucket
s3.createBucket({ Bucket: bucketName })
  .promise()
  .then(() => console.log(`Created bucket: ${bucketName}`))
  .catch((err) => {
    // We will ignore 409 errors which indicate that the bucket already exists
    if (err.statusCode !== 409) {
      console.log(`Error creating bucket: ${err}`);
    }
  });

// when get into home page, visit counter will be return
app.get("/home/", function (req, res, next) {
  const key = req.query.key.trim();
  const bucketName = "n10622012-counter";
  // construct the main URL and s3 Key
  const s3 = new AWS.S3({ apiVersion: "2022-09-16" });
  const url = `/?key=${key}`;
  const s3Key = `counter-${key}`;

  const params = { Bucket: bucketName, Key: s3Key };

  s3.getObject(params)
    .promise()
    .then((result) => {
      // serve from S3
      resultJSON = JSON.parse(result.Body);
      res.json({ data: resultJSON });
      // increase visit counter
      visitCounter = resultJSON + 1;
      // upload visit counter
      const objectParams = {
        Bucket: bucketName,
        Key: s3Key,
        Body: visitCounter.toString(),
      };
      s3.putObject(objectParams)
        .promise()
        .then(() => {
          console.log(`Successfully uploaded data to ${bucketName}/${s3Key}`);
        });
    })

    .catch((err) => {
      if (err.statusCode === 404) {
        // serve from API and store in S3
        console.log("err");
        axios
          .get(url)
          .then((response) => {
            const responseJSON = response.data;
            const body = JSON.stringify({
              source: "S3 Bucket",
              ...responseJSON,
            });

            const objectParams = { Bucket: bucketName, Key: s3Key, Body: body };
            s3.putObject(objectParams)
              .promise()
              .then(() => {
                console.log(
                  `Successfully uploaded data to ${bucketName}/${s3Key}`
                );

                res.json({ source: "API", ...responseJSON });
              });
          })
          .catch((err) => res.json(err));
      } else {
        res.json(err);
      }
    });
});

app.use(express.static(path.join(__dirname, "/build")));
// routes based on url
app.use("/events/", seatGeekRouter);
app.use("/weather/", openWeatherRouter);

app.use((req, res, next) => {
  next(createError.NotFound());
});

// send the error page
app.use((err, req, res, next) => {
  res.sendFile(path.join(__dirname, "/routes/pages/pageError.html"));
});

http.listen(port, () => {
  console.log(`Listening on ${host}:${port}`);
});
