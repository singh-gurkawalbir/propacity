import React, { useEffect } from 'react';
import paris from '../../assets/paris.jpg';
import london from '../../assets/london.jpg';
import newYork from '../../assets/newYork.jpg';
import dubai from '../../assets/dubai.jpg';
import traveler1 from '../../assets/traveller1.jpg';
import traveler2 from '../../assets/traveller2.jpg';
import traveler3 from '../../assets/traveller3.jpg';
import traveler4 from '../../assets/traveller4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'JKaur',
    sociallink: '@JKaur',
  },
  {
    id: 2,
    destinationImage: london,
    travelerImage: traveler2,
    travelerName: 'AKaur',
    sociallink: '@AKaur',
  },
  {
    id: 3,
    destinationImage: newYork,
    travelerImage: traveler3,
    travelerName: 'KSingh',
    sociallink: '@KSingh',
  },
  {
    id: 4,
    destinationImage: dubai,
    travelerImage: traveler4,
    travelerName: 'GSingh',
    sociallink: '@GSingh',
  },
];

const Travelers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id='travelers' className='travelers container section'>
      <div className='sectionContainer'>
        <h2 data-aos='fade-down' data-aos-duration='1500'>
          Top travelers of this month!
        </h2>
        <div className='travelersContainer grid'>
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              sociallink,
            }) => {
              return (
                <div
                  key={id}
                  data-aos='fade-up'
                  data-aos-duration='1500'
                  className='singleTraveler'
                >
                  <img
                    src={destinationImage}
                    className='destinationImage'
                    alt='Paris'
                  />
                  <div className='travelerDetails'>
                    <div className='travelerPicture'>
                      <img
                        src={travelerImage}
                        className='travelerImage'
                        alt='Traveler'
                      />
                    </div>
                    <div className='travelerName'>
                      <span>{travelerName}</span>
                      <p>{sociallink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
