import React from "react";

import './campsites.css';
import GoogleMap from 'google-map-react';
// import axios from 'axios';
// import Pusher from 'pusher-js';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Portfolio() {
//   return (
//   <>
//     <Cards/>
//     <Footer />
//   </>
//   );
// }

export function Campsites() {
  return (
    <div>
      <h1>Campsites</h1>
      <hr></hr>
      <p>Campsite stuff goes here.</p>
    </div>
  );

function Campsites(props) {
    console.log(props)
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

return (
    <GoogleMap
    style={mapStyles}
    bootstrapURLKeys={{ key: 'AIzaSyAP93BAoflNBnB8aYrKvbJ8CwCCMRSa4fA' }}
    center={props.center}
    zoom={14}
  >
    {locationMarkers}
  </GoogleMap>

)}    


