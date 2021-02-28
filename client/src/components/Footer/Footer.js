import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/con' className='social-logo'>
              Contact me @
            </Link>
          </div>
          <div className='social-icons'>
          {/* eslint-disable-next-line */}
            <a
              className='social-icon-link'
              to='/pages/campsites'
              target='_blank'
              aria-label='Campsites'
            >
              <i className="fab fa-campground" />
            </a>
            {/* eslint-disable-next-line */}
            <a
              className='social-icon-link'
              to='/pages/trails'
              target='_blank'
              aria-label='Trails'
            >
              <i className='fab fa-Hiking' />
            </a>
            {/* eslint-disable-next-line */}
            <a
              className='social-icon-link'
              to='/pages/travelservices'
              target='_blank'
              aria-label='Travel Resources'
            >
              <i className="far fa-toolbox" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
