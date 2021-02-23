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
              className='social-icon-link GitHub'
              href='https://github.com/CHANCEEWELL?tab=repositories'
              target='_blank'
              aria-label='GitHub'
            >
              <i className="fab fa-github" />
            </a>
            {/* eslint-disable-next-line */}
            <a
              className='social-icon-link LinkedIn'
              href="https://www.facebook.com/chance.ewell"
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
            {/* eslint-disable-next-line */}
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/chance.ewell'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>
            {/* eslint-disable-next-line */}
            <a
              className='social-icon-link'
              href='https://drive.google.com/file/d/1k_CJnnWg9ZiBCTeoam6g3HG59ySD--Ij/view?usp=drivesdk'
              target='_blank'
              aria-label='Resume'
            >
              <i className="far fa-file" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
