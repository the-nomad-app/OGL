import React, { useState } from "react";
import API from "../../../utils/API";
import '../../../App.css';
import './travelservices.css';
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

function TravelServices() {

  function setLocation() {
    var location = document.querySelector(".search").value;
    API.geocode(location)
      .then((res) => {
        var lat = res.data.items[0].position.lat;
        var long = res.data.items[0].position.lng;
      });
  }

  return (
    <div>
      <h1>Travel Services</h1>
      <h5>Search for travel services here.</h5>
      <input className="search" placeholder="Search Location"></input>
      <button onClick={setLocation}>Search</button>
      <hr></hr>
      <p>Travel Services stuff goes here.</p>
    </div>
  );
}

export default TravelServices;
