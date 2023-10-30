import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Channels = ({state}) => {
  const location = useLocation();
  let previousLink;
    console.log(location)
  // Determine the previous link based on the current location
  if (location.state && location.state.from) {
    previousLink = location.state.from;
  } else {
    previousLink = '/objectives'; // Default previous link if not specified
  }

  return (
    <div>
      <div className='links'>
      {state.objective === 'differentiate' && <Link to="/differentiate-route">Previous</Link>}
      {state.objective === 'lower costs' && <Link to="/lower-costs-route">Previous</Link>}
      {state.objective === 'targeting' && <Link to="/targeting-route">Previous</Link>}
      </div>
    </div>
  );
};

export default Channels;
