import React from "react";






function Home() {
  const backgroundImgs = [ "./images/flatheadLake.jpg", "./images/hotSprings.jpg", "./images/theRonaArch.jpg", "./images/redFleet.jpg", "./images/mermaidPose.jpg", "./images/saltFlats.jpg",  ]
  return (
          <div className='home-container'>
          <embed type="image/jpg" src= { backgroundImgs[Math.floor (Math.random() * backgroundImgs.length)] } width="100%" height="100%"></embed>
        </div>
      );
    }
export {Home};
