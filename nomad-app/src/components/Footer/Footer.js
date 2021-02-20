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
            
            <Link to='/' className='social-logo'>
              Designed for living in the moment
            </Link>

          </div>
          <div className='social-icons'>
          <a
              className='social-icon-link LinkedIn'
              href=""
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a> 
            <a
              className='social-icon-link instagram'
              href=''
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>           
            <a
              className='social-icon-link facebook'
              href=''
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;