import React from "react";
import API from "../../utils/geocode";
// import API from "../../../utils/API";
import "./travelservices.css";
import GoogleMap from "google-map-react";
// import axios from 'axios';
// import Pusher from 'pusher-js';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const express = require("express");
// const app = express();
// const cors = require("cors");

// app.use(cors());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     next();
// });


const mapStyles = {
  width: "100%",
  height: "100%",
};
const markerStyle = {
  height: "50px",
  width: "50px",
  marginTop: "-50px",
};
const imgStyle = {
  height: "100%",
};
const Marker = ({ title }) => (
  <div style={markerStyle}>
    <img
      style={imgStyle}
      src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png"
      alt={title}
    />
    <h3>{title}</h3>
  </div>
);

function TravelServices(props) {
  API.getGas(props.locations.lat, props.locations.lng)
    .then((res) => {
      console.log("stations: ", res);
    })
    .catch((err) => console.log(err));
  console.log(props.locations);

  // console.log(props);
  let locationMarkers = Object.keys(props.locations).map((username, id) => {
    return (
      <Marker
        key={id}
        title={`${
          username === props.current_user
            ? "My location"
            : username + "'s location"
        }`}
        lat={props.locations[`${username}`].lat}
        lng={props.locations[`${username}`].lng}
      ></Marker>
    );
  });

  return (
    <GoogleMap
      style={mapStyles}
      bootstrapURLKeys={{ key: "AIzaSyAP93BAoflNBnB8aYrKvbJ8CwCCMRSa4fA" }}
      center={props.center}
      zoom={14}
    >
      {locationMarkers}
    </GoogleMap>
  );
}

export { TravelServices };
