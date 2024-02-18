import React from "react";
import { useEffect, useState } from "react";
import SeatGeekPage from "./SeatGeekPage";
import "../assets/css/HomeCss.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomePage() {
  let url = `/home?key=n10622012`;
  // bring the visitor count data
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        toast.success(`Visit counter: ${res.data}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((e) => console.log(e));
  });

  // page returns seatgeek
  return (
    <div className="w3-dark-grey">
      <SeatGeekPage />
      <ToastContainer />
    </div>
  );
}

export default HomePage;
