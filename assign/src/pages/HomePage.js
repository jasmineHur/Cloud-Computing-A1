import React from "react";
import { useEffect, useState } from "react";
import SeatGeekPage from "./SeatGeekPage";
import "../assets/css/HomeCss.css";
function HomePage() {
  const [visitCounter, setVisitCounter] = useState(0);
  // let visitCounter;
  let url = `/home?key=n10622012`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setVisitCounter(res.data);
        // visitCounter = res.data;
      })
      .catch((e) => console.log(e));
  });
  return (
    <div className="w3-dark-grey">
      <p className="home-p">Visit Counter: </p>
      <p className="home-p">{visitCounter}</p>
      <SeatGeekPage />
    </div>
  );
}

export default HomePage;
