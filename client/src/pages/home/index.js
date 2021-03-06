import React from "react";
import Login from "../Login"
import Register from "../Register"
import "./home.css"
// import Cards from "../../components/Cards/Cards"

function Home() {
  const backgroundImgs = [ "./images/flatheadLake.jpg", "./images/hotSprings.jpg", "./images/theRonaArch.jpg", "./images/redFleet.jpg", "./images/mermaidPose.jpg", "./images/saltFlats.jpg",  ]
  // const styles={
  //   loginContainer: {
  //     backgroundColor: "red",
  //     borderColor: "black",
  //     padding: "10%",
  //     zIndex: "1000",
  //     margin: "-20vh auto 0",
      
  //   }
  // }
  return (
          <div className='home-container'>
          <embed type="image/jpg" src= { backgroundImgs[Math.floor (Math.random() * backgroundImgs.length)] } width="100%" height="100%"></embed>
        <div>
        {/* style={styles.loginContainer} className='login-container' */}
          <Login />
          <Register />
        </div>
        </div>
      );
    }
export { Home };
