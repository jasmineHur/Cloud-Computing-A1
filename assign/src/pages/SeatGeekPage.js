import React from "react";
import { useEffect, useState } from "react";
import LeafletPage, { LeafletData } from "./LeafletPage";
import dateFormat from "dateformat";
import DatePicker from "react-date-picker";
import moment from "moment";
import geeks from "../assets/resource/geeks.json";
import "../assets/css/Paging.css";
import Pagination from "react-js-pagination";
import "../assets/css/SeatGeekCss.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

// Bring the datas from API
const SeatGeekData = ({}) => {
  const [page, setPage] = useState(1);
  const [SeakGeekAPIData, setSeatGeekAPIData] = useState(null);
  const [EventValue, setEventValue] = useState("");
  const [ShowMap, setShowMap] = useState(null);
  const [StartValue, StartOnChange] = useState(new Date());
  const [EndValue, EndOnChange] = useState(new Date());
  const queryString = window.location.search;
  let defualtDataNum = 40;
  let url;

  // changing event type based on choose option
  const handleSelect = (e) => {
    setEventValue(e.target.value);
  };
  // vewing event list based on selecting the page
  const handlePageChange = (page) => {
    setPage(page);
    // if didn't select event then alarm will be shown
    if (
      queryString === null ||
      queryString === undefined ||
      queryString === ""
    ) {
      toast.success("Please Selet Event First", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    /* changing url based on quries 
      case1: if query string is not empty otherwise, url will be set like case4
      case2: when ending date is bigger than start value, url send every params
      case3: when ending date is smaller than start value, url send params excpet ending
      case4: if query string is empty, url direct only event except all values 
    */
    if (queryString.length !== 0) {
      // case1
      if (EndValue > StartValue) {
        // case2
        url =
          `/events` +
          `${queryString}` +
          `&startDate=${dateFormat(
            StartValue,
            "yyyy-mm-dd"
          )}&endDate=${dateFormat(EndValue, "yyyy-mm-dd")}&page=${page}`;
      } else {
        // case3
        url =
          `/events` +
          `${queryString}` +
          `&startDate=${dateFormat(StartValue, "yyyy-mm-dd")}&page=${page}`;
      }
    } else {
      // case4
      url = `/events`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 500) {
          toast.error(`${res.status}`, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else if (res.status === 403) {
          toast.error(`${res.status}`, {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          // store datas and show map use state will be true
          setSeatGeekAPIData(res);
          setShowMap(true);
        }
      })

      .catch((e) => console.log(e));
  }, [SeakGeekAPIData]);

  // these if conditions are for late loading
  if (SeakGeekAPIData !== null && SeakGeekAPIData !== undefined) {
    if (SeakGeekAPIData.length !== 0) {
      LeafletData(SeakGeekAPIData);
      return (
        <>
          <div className="w3-white seatgeek-container">
            <div className="w3-container w3-padding w3-blue-grey seatgeek-sub-container">
              <h4>SeatGeeks</h4>
              <form className="seatgeek-container-inner">
                <div className="menu">
                  <select
                    type="text"
                    name="search"
                    onChange={handleSelect}
                    value={EventValue}
                    defaultValue={"Baseball"}
                    className="seatgeek-selectbox"
                  >
                    {geeks.map((item) => (
                      <option value={item.label} key={item.label}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                  <button
                    className="w3-button w3-black w3-round-small"
                    type="submit"
                    value="Search"
                  >
                    <span>Search</span>
                  </button>
                  <ToastContainer />
                </div>
              </form>
              <div className="seatgeek-container-inner">
                <p className="seatgeek-p">Start Date: </p>
                <DatePicker
                  minDate={moment().toDate()}
                  onChange={StartOnChange}
                  value={StartValue}
                />
                <p className="seatgeek-p">End Date: </p>
                <DatePicker
                  minDate={
                    moment().toDate() < StartValue
                      ? StartValue
                      : moment().toDate()
                  }
                  onChange={EndOnChange}
                  value={EndValue}
                />
              </div>
              <div>
                {SeakGeekAPIData.data.map((obj) => (
                  <div className="seatgeek-events-container">
                    <tr>
                      <td rowspan="3" align="center">
                        <img
                          src={obj.performers[0].image}
                          alt="Image"
                          className="w3-margin-right seatgeek-events-img"
                        />
                      </td>
                      <td className="seatgeek-table-row">
                        <tr>
                          <p className="seatgeek-table-p">
                            {obj.performers[0].name}
                          </p>
                        </tr>
                        <tr>
                          <p className="seatgeek-table-p">{obj.datetime_utc}</p>
                        </tr>
                        <tr>
                          <a href={obj.performers[0].url}>buy ticket</a>
                        </tr>
                        <tr>
                          <Link
                            to="/weather"
                            state={{
                              locations: [
                                obj.venue.location.lat,
                                obj.venue.location.lon,
                              ],
                            }}
                          >
                            Check 5days Weather
                          </Link>
                        </tr>
                      </td>
                    </tr>
                  </div>
                ))}
              </div>
              <Pagination
                activePage={page}
                itemsCountPerPage={5}
                totalItemsCount={defualtDataNum}
                pageRangeDisplayed={5}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange}
              />
            </div>
          </div>
          {ShowMap === true ? <LeafletPage /> : null}
        </>
      );
    }
  }
};

function SeatGeekPage() {
  return (
    <div>
      <SeatGeekData />
    </div>
  );
}

export default SeatGeekPage;
