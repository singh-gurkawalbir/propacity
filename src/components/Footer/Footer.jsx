import React, { useEffect } from 'react';
import Logo from '../../assets/takeoff.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id='footer' className='footer'>
      <div className='sectionContainer container grid'>
        <div data-aos='fade-up' data-aos-duration='1500' className='gridOne'>
          <div className='logoDiv'>
            <img src={Logo} className='Logo' alt='Logo' />
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className='socialIcon flex'>
            <div className='socialIcon flex'>
              <a
                href='https://linkedin.com/in/singh-gurkawalbir/'
                target='_blank'
                rel='noreferrer'
              >
                <FaLinkedin className='icon' />
              </a>
              <a
                href='https://github.com/singh-gurkawalbir'
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub className='icon' />
              </a>
              <a
                href='mailto:singhgurkawalbir@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                <HiOutlineMail className='icon' />
              </a>
              <a href='/resume.pdf'>
                <BsFillPersonLinesFill
                  className='icon'
                  target='_blank'
                />
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos='fade-up'
          data-aos-duration='1500'
          className='footerLinks'
        >
          <span className='linkTitle'>Information</span>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Explore</a>
          </li>
          <li>
            <a href='#'>Flight Status</a>
          </li>
          <li>
            <a href='#'>Travel</a>
          </li>
          <li>
            <a href='#'>Check-In</a>
          </li>
          <li>
            <a href='#'>Check-Out</a>
          </li>
        </div>

        <div
          data-aos='fade-up'
          data-aos-duration='1500'
          className='footerLinks'
        >
          <span className='linkTitle'>Quick Guide</span>
          <li>
            <a href='#'>FAQ</a>
          </li>
          <li>
            <a href='#'>How To</a>
          </li>
          <li>
            <a href='#'>Features</a>
          </li>
          <li>
            <a href='#'>Baggage</a>
          </li>
          <li>
            <a href='#'>Route Map</a>
          </li>
          <li>
            <a href='#'>Join Us</a>
          </li>
        </div>

        <div
          data-aos='fade-up'
          data-aos-duration='1500'
          className='footerLinks'
        >
          <span className='linkTitle'>Others</span>
          <li>
            <a href='#'>Chauffer</a>
          </li>
          <li>
            <a href='#'>Partners</a>
          </li>
          <li>
            <a href='#'>Destination</a>
          </li>
          <li>
            <a href='#'>Careers</a>
          </li>
          <li>
            <a href='#'>Transportayion</a>
          </li>
          <li>
            <a href='#'>Programme Rules</a>
          </li>
        </div>
      </div>

      <div className='copyRightDiv flex'>
        <p>
          Courtesy Design | Developed by
          <h4>Gurkawalbir Singh</h4>
        </p>
      </div>
    </div>
  );
}

export default Footer;
