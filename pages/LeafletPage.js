import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../assets/css/LeafletCss.css";
// global variable for using both functions (LeafletData, LeafleatPage)
let eventArray;

export function LeafletData(data) {
  // datas from SeatGeekPage
  eventArray = data.data;
}

function LeafleatPage() {
  // default location for showing map
  const DEFAULT_LAT = 38.220589;
  const DEFAULT_LON = -98.505218;

  let state = { lat: DEFAULT_LAT, lan: DEFAULT_LON, zoom: 4 };
  // pin the location based on seatgeek datas
  const rendering = () => {
    const locationArray = [];
    for (let i = 0; i < eventArray.length; i++) {
      locationArray.push(
        <Marker
          position={[
            eventArray[i].venue.location.lat,
            eventArray[i].venue.location.lon,
          ]}
        >
          <Popup>
            <p className="leaflet-p">{eventArray[i].performers[0].name}</p>
            <p className="leaflet-p">{eventArray[i].datetime_utc}</p>
            <p className="leaflet-p">
              <a href={eventArray[i].performers[0].url}>buy ticket</a>
            </p>
          </Popup>
        </Marker>
      );
    }
    return locationArray;
  };
  return (
    <div>
      <MapContainer
        center={[state.lat, state.lan]}
        zoom={state.zoom}
        className="map leaflet-map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {rendering()}
      </MapContainer>
    </div>
  );
}

export default LeafleatPage;
