import React, { useEffect } from 'react';
import imageGrid from '../../assets/imageGrid.png';
import download from '../../assets/download.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Lounge() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id='lounge' className='lounge container section'>
      <div className='sectionContainer grid'>
        <div data-aos='fade-left' data-aos-duration='1500' className='imgDiv'>
          <img src={imageGrid} />
          {/* <img src={download} /> */}
        </div>

        <div className='textDiv'>
          <h2 data-aos='fade-down' data-aos-duration='1500'>
            Unaccompanied Minor Lounge
          </h2>

          <div className='grids grid'>
            <div
              data-aos='fade-down'
              data-aos-duration='1500'
              className='singleGrid'
            >
              <span className='gridTitle'>Help through the airport</span>
              <p>
                You can also Amet eu eu aute dolor proident sint ea.dolore
                fugiat culpa dolor dolore sint.
              </p>
            </div>

            <div
              data-aos='fade-down'
              data-aos-duration='1500'
              className='singleGrid'
            >
              <span className='gridTitle'>Care on the flight</span>
              <p>
                You can also Amet eu eu aute dolor proident sint ea.dolore
                fugiat culpa dolor dolore sint.
              </p>
            </div>

            <div
              data-aos='fade-down'
              data-aos-duration='1500'
              className='singleGrid'
            >
              <span className='gridTitle'>Chaueffer drive service</span>
              <p>
                You can also Amet eu eu aute dolor proident sint ea.dolore
                fugiat culpa dolor dolore sint.
              </p>
            </div>

            <div
              data-aos='fade-down'
              data-aos-duration='1500'
              className='singleGrid'
            >
              <span className='gridTitle'>Priority Boarding</span>
              <p>
                You can also Amet eu eu aute dolor proident sint ea.dolore
                fugiat culpa dolor dolore sint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lounge;
