import React, { useState, useEffect } from "react";
import './trails.css';
import GoogleMap from 'google-map-react';
import API from "../../utils/geocode";

// import axios from 'axios';
// import Pusher from 'pusher-js';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Trails() {
//   return (
//     <div>
//       <h1>Trails</h1>
//       <hr></hr>
//       <p>Trail stuff goes here.</p>
//     </div>
//   );
// }

// export default Trails;

const mapStyles = {
  width: '100%',
  height: '100%'
}
const markerStyle = {
  height: '50px',
  width: '50px',
  marginTop: '-50px'
}
const imgStyle = {
  height: '100%'
}
const Marker = ({ title }) => (
  <div style={markerStyle}>
    <img style={imgStyle} src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png" alt={title} />
    <h3>{title}</h3>
  </div>
);

function Trails(props) {
  const [hikes, setHikes] = useState([])

  useEffect(() => {
    API.getHikes(props.locations.lat, props.locations.lng)
    .then((res) => {
      setHikes(res.data.results)
      
    })
    .catch((err) => console.log(err));
    
  }, [])

  let locationMarkers = Object.keys(props.locations).map((username, id) => {
      return (
          <Marker
              key={id}
              title={`${username === props.current_user ? 'My location' : username + "'s location"}`}
              lat={props.locations[`${username}`].lat}
              lng={props.locations[`${username}`].lng}
          >
          </Marker>
      );
  });

  let hikeMarkers = hikes.map((campground) => {
    return (
      <Marker
      key={campground.place_id}
      title={campground.name}
      lat={campground.geometry.location.lat}
      lng={campground.geometry.location.lng}
      ></Marker>
      );
    });

return (
  <GoogleMap
  style={mapStyles}
  bootstrapURLKeys={{ key: 'AIzaSyAP93BAoflNBnB8aYrKvbJ8CwCCMRSa4fA' }}
  center={props.center}
  zoom={14}
>
  {locationMarkers}
  {hikeMarkers}
</GoogleMap>

)}    

export {Trails};
