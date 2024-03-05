import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Typography } from '@mui/material';

const FlightSearchResults = ({ flights }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 10;

  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box className='flightSearchResults' p="20px">
      <Typography variant="h2" mb="20px">Search Results</Typography>
      <ul>
        {currentFlights.map((flight, index) => (
          <li key={index}>
            <div className='flightDetails'>
              <div className='mediumFont'>
                <div className='flightName'>
                  <h5>{flight.displayData.airlines[0].airlineName}</h5>
                  <p style={{color: 'black', fontSize: '15px'}}>{flight.displayData.airlines[0].flightNumber}</p>
                </div>
              </div>

              <div className='mediumFont'>
                <div className='flightName'>
                  <h3>{flight.displayData.destination.airport.cityName}</h3>
                  <p style={{color: 'black', fontSize: '13px'}}>{flight.displayData.destination.arrTime.slice(0, 10)}</p>
                </div>
              </div>

              <div className='mediumFont'>
                <div>
                  <h6>Total Duration:</h6>
                  <h6>{flight.displayData.totalDuration}</h6>
                </div>
              </div>
              <div className='mediumFont'>
                <div>
                  <h3>{flight.displayData.source.airport.cityName}</h3>
                  <p style={{color: 'black', fontSize: '13px'}}>{flight.displayData.source.depTime.slice(0, 10)}</p>
                </div>
              </div>

              <h5>Price: ₹ {flight.fare}</h5>
            </div>
          </li>
        ))}
      </ul>
      <Box mt="20px" display="flex" justifyContent="center">
        <Pagination
          color="primary"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(flights.length / flightsPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      </Box>
    </Box>
  );
};

export default FlightSearchResults;
