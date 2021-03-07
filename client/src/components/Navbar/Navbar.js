import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            NOM<i className='fab fa-think-peaks'/>D
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/campsites'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  <i className="fas fa-campground" />
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/trails'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  <i className="fas fa-hiking" />
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/travelservices'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  <i className="fas fa-gas-pump" />
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  <i className="fas fa-home" />
                </Link>
              </li>
            </ul>

            {/* {button && <Button buttonStyle='btn--outline'></Button>} */}
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;