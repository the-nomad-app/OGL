import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HomeSection.css';
import './images/profile.jpeg/'
function HomeSection() {
  return (
    <div className='home-container'>
      <embed type="image/jpg" src="profile.jpeg" width="300" height="200"></embed>
      <p>My name is <strong>Chance Ewell</strong>.</p>
      <br></br>
      <p>  </p>
    </div>
  );
}

export default HomeSection;
