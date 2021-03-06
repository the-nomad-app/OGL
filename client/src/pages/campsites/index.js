import React, {useState, useEffect} from "react";
import "./campsites.css";
import GoogleMap from "google-map-react";
import API from "../../utils/geocode";
// import axios from 'axios';
// import Pusher from 'pusher-js';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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
const Marker = ({ name }) => (
  <div style={markerStyle}>
    <img
      style={imgStyle}
      src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png"
      alt={name}
    />
    <h3>{name}</h3>
  </div>
);

function Campsites(props) {
  // const [campgrounds, setCampgrounds] = useState([{
  //   name: "",
  //   geometry: {
  //     location: {
  //       lat: "",
  //       lng: ""
  //     }
  //   },
  // }])
  // useEffect(() => {
  //   const apiData = API.getCampgrounds(props.locations.lat, props.locations.lng)
  //   console.log("apiData", apiData)
  //   setCampgrounds (apiData)
  // }, [])
  var campgrounds = []
  API.getCampgrounds(props.locations.lat, props.locations.lng)
    .then((res) => {
        // setCampgrounds(res.data.results);
        console.log(campgrounds)
    })
    .catch((err) => console.log(err));
    
    let campgroundMarkers = Object.keys(campgrounds).map((campground) => {
      console.log(campground)
      return (
        <Marker
          name={campground.name}
          lat={campground.geometry.location.lat}
          lng={campground.geometry.location.lng}
        />
      );
    });
// console.log(campgroundMarkers);
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
      {/* {campgroundMarkers} */}
    </GoogleMap>
  );
}

export { Campsites };
