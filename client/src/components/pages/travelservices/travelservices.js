import React from "react";
// import API from "../../../utils/API";
import '../../../App.css';
import './travelservices.css';
import GoogleMap from 'google-map-react';
// import axios from 'axios';
// import Pusher from 'pusher-js';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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

function TravelServices(props) {
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

export default TravelServices;






























// import Cards from '../Cards';
// import Footer from '../Footer';

// export default function Portfolio() {
//   return (
//   <>
//     <Cards/>
//     <Footer />
//   </>
//   );
// }

// function TravelServices() {

//   function setLocation() {
//     var location = document.querySelector(".search").value;
//     API.geocode(location)
//       .then((res) => {
//         var lat = res.data.items[0].position.lat;
//         var long = res.data.items[0].position.lng;
//       });
//   }

//   return (
//     <div>
//       <h1>Travel Services</h1>
//       <h5>Search for travel services here.</h5>
//       <input className="search" placeholder="Search Location"></input>
//       <button onClick={setLocation}>Search</button>
//       <hr></hr>
//       <p>Travel Services stuff goes here.</p>
//     </div>
//   );
// }

// export default TravelServices;
