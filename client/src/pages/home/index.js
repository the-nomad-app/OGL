import React from "react";
import 'home.css';





function Home() {
  const backgroundImgs = [ "./images/Pathway.jpg", "./images/arizonaRocks.jpg", "./images/Perfect.jpg" ]
  return (
          <div className='home-container'>
          <h1>Welcome to <strong>NOMAD!</strong></h1>
          <embed type="image/jpg" src={backgroundImgs[Math.floor (Math.random() * backgroundImgs.length)]} width="100%" height="100%"></embed>
        </div>
      );
    }
export default Home;
