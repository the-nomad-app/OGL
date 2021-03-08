import React from "react";
import Login from "../Login";
import Register from "../Register";
import "./home.css";
// import Cards from "../../components/Cards/Cards"

function Home() {
  const backgroundImgs = [ 
    "./images/flatheadLake.jpg", 
    "./images/cooleyGrandCanyon.jpg", 
    "./images/cecretLake.jpg", 
    "./images/redFleet.jpg", 
    "./images/mermaidPose.jpg", 
    "./images/saltFlats.jpg", 
    "./images/antelopeIsland.jpg", 
    "./images/arizonaRocks.jpg",  ]

  return (
    <div className='home-container'>
      {/* style={styles.loginContainer} className='login-container' */}
      <embed type="image/jpg" src={backgroundImgs[Math.floor(Math.random() * backgroundImgs.length)]} width="100%" height="100%"></embed>
      <Login /> 
      <Register />
    </div>
  );
}
export { Home };