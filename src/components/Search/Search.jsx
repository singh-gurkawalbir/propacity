import React, { useState, useEffect } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { IoAirplane } from 'react-icons/io5';
import Aos from 'aos';
import 'aos/dist/aos.css';
import FlightSearchResults from '../FlightSearchResults';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

function Search() {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [selectedAirline, setSelectedAirline] = useState('');
  const [showFlightDetails, setShowFlightDetails] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.npoint.io/4829d4ab0e96bfab50e7'
        );
        const data = response.data.data;
        if (!data) {
          throw new Error('Invalid data format: result array not found');
        }
        const modifiedFlights = data.result;

        setFlights(modifiedFlights);
        setFilteredFlights(modifiedFlights);
      } catch (error) {
        console.error('Error fetching flight details:', error.message);
      }
    };

    fetchData();
  }, []);

  console.log({ flights, filteredFlights });
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const sortFlightsByPrice = () => {
    const sortedFlights = [...filteredFlights].sort((a, b) => a.fare - b.fare);
    setFilteredFlights(sortedFlights);
    setShowFlightDetails(true);
  };

  const handleSearch = () => {
    const filtered = flights.filter((flight) => {
      return (
        flight.displayData.source.airport.cityName.toLowerCase() ===
          from.toLowerCase() &&
        flight.displayData.destination.airport.cityName.toLowerCase() ===
          to.toLowerCase() &&
        flight.displayData.airlines[0].airlineName === selectedAirline
      );
    });
    setFilteredFlights(filtered);
    setShowFlightDetails(true);
  };

  const handleAirlineChange = (e) => {
    setSelectedAirline(e.target.value);
  };

  const handleShowAllFlights = () => {
    setFilteredFlights(flights);
    setShowFlightDetails(true);
    setFrom('');
    setTo('');
  };

  return (
    <div id='search' className='search container section'>
      <h1>JetSetGo - Simplifying Flight Bookings</h1>
      <div
        data-aos='fade-up'
        data-aos-duration='1500'
        className='sectionContainer grid'
      >
        <div className='btns flex'>
          <div className='singleBtn'>
            <span>Economy</span>
          </div>

          <div className='singleBtn'>
            <span>Business</span>
          </div>

          <div className='singleBtn'>
            <span>First Class</span>
          </div>
        </div>

        <div
          data-aos='fade-up'
          data-aos-duration='2000'
          className='searchInputs flex'
        >
          <div className='singleInput flex'>
            <div className='iconDiv'>
              <HiOutlineLocationMarker className='icon' />
            </div>
            <div className='texts'>
              <h4>From</h4>
              <input
                required
                type='text'
                placeholder='Source'
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
          </div>

          <div className='singleInput flex'>
            <div className='iconDiv'>
              <HiOutlineLocationMarker className='icon' />
            </div>
            <div className='texts'>
              <h4>To</h4>
              <input
                required
                type='text'
                placeholder='Destination'
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
          </div>

          <div className='singleInput flex'>
            <div className='iconDiv'>
              <IoAirplane className='icon' />
            </div>
            <div className='texts'>
              <h4>Airline</h4>
              <select
                value={selectedAirline}
                onChange={handleAirlineChange}
                className='option'
              >
                <option value='JetSpice'>JetSpice</option>
                <option value='Air India'>Air India</option>
              </select>
            </div>
          </div>

          <button className='btn btnBlock flex' onClick={handleSearch}>
            Search Flight
          </button>
          <button className='btn btnBlock flex' onClick={sortFlightsByPrice}>
            Sort by Price
          </button>
          <button className='btn btnBlock flex' onClick={handleShowAllFlights}>
            Show All Flights
          </button>
        </div>

        {showFlightDetails && <FlightSearchResults flights={filteredFlights} />}
      </div>
    </div>
  );
}

export default Search;

// const convertToDate = (dateString) => {
//   const date = new Date(dateString);
//   const year = date.getFullYear();
//   const month = ('0' + (date.getMonth() + 1)).slice(-2);
//   const day = ('0' + date.getDate()).slice(-2);
//   const final = `${year}-${month}-${day}`;
//   setDate(final);
// };

{
  /* <div className='singleInput flex'>
            <div className='iconDiv'>
              <RxCalendar className='icon' />
            </div>
            <div className='texts'>
              <h4>Date</h4>
              <DatePicker
                selected={date}
                onChange={convertToDate}
                className='date-picker'
              />
            </div>
          </div> */
}
// const modifiedFlights = data.result.map((flight) => {
//   if (
//     flight.displayData &&
//     flight.displayData.source &&
//     flight.displayData.source.depTime
//   ) {
//     const formattedDepTime = flight.displayData.source.depTime.slice(
//       0,
//       10
//     );
//     return { ...flight, formattedDepTime };
//   } else {
//     return flight;
//   }
// });

// console.log(
//   flight.displayData.destination.airport.cityName,
//   to,
//   flight.displayData.source.airport.cityName,
//   from,
//   flight.displayData.airlines[0].airlineName,
//   selectedAirline
// );
