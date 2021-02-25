import React, { useState } from "react";

function TravelServices() {
  const [searchLocation, setSearchLocation] = useState();

  function setLocation() {
    var location = document.querySelector(".search").value;
    setSearchLocation(location);
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
