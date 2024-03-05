import React, { useState } from 'react';
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import logo from '../../assets/takeoff.png';
import { Link } from 'react-scroll';

function Navbar() {
  const [active, setActive] = useState('navBarMenu');
  const showBar = () => {
    setActive('navBarMenu showBar');
  };
  const removeBar = () => {
    setActive('navBarMenu');
  };

  const [bg, setBg] = useState('navBarTwo');
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      setBg('navBarTwo navBarWithBg');
    } else {
      setBg('navBarTwo');
    }
  };
  window.addEventListener('scroll', addBgColor);

  return (
    <div className='navBar flex'>
      <div className='navBarOne flex'>
        <div>
          <SiConsul className='icon' />
        </div>

        <div className='none flex'>
          <a
            href='mailto:singhgurkawalbir@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='flex'
          >
            <BsPhoneVibrate className='icon' />
            Contact
          </a>
        </div>

        <div className='atb flex'>
          <span>
            <AiOutlineGlobal className='icon' />
          </span>
        </div>
      </div>

      <div className={bg}>
        <div className='logoDiv'>
          <img src={logo} className='Logo' />
        </div>
        <div className={active}>
          <ul className='menu flex'>
            <li className='listItem'>
              <Link to='home' onClick={removeBar} smooth duration={500}>
                Home
              </Link>
            </li>
            <li className='listItem'>
              <Link to='search' onClick={removeBar} smooth duration={500}>
                Search
              </Link>
            </li>
            <li className='listItem'>
              <Link to='support' onClick={removeBar} smooth duration={500}>
                Support
              </Link>
            </li>
            <li className='listItem'>
              <Link to='travelers' onClick={removeBar} smooth duration={500}>
                Travelers
              </Link>
            </li>
            <li className='listItem'>
              <Link to='footer' onClick={removeBar} smooth duration={500}>
                Footer
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={showBar} className='toggleIcon'>
          <CgMenuGridO className='icon' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
