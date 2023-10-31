import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Channels = ({state, handleChange}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOptions(prevSelectedOptions => {
      const newSelectedOptions = prevSelectedOptions.includes(value)
        ? prevSelectedOptions.filter(option => option !== value)
        : [...prevSelectedOptions, value];
      handleChange('selectedOptions', newSelectedOptions);  // Update global state
      return newSelectedOptions;
    });
  };

  
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/completed-form/', state);
      const result = response.data;
      handleChange('message', result.message);  // Update global state with the message
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="channels-container">
      <h2 style={{ textAlign: 'center' }}>Select Channels</h2>
      <form className="channels-form">
        <label className="channels-label">
          <input
            type="checkbox"
            value="SEM"
            checked={selectedOptions.includes('SEM')}
            onChange={handleOptionChange}
          />
          SEM
        </label>
        <label className="channels-label">
          <input
            type="checkbox"
            value="SEO"
            checked={selectedOptions.includes('SEO')}
            onChange={handleOptionChange}
          />
          SEO
        </label>
        <label className="channels-label">
          <input
            type="checkbox"
            value="Social Ads"
            checked={selectedOptions.includes('Social Ads')}
            onChange={handleOptionChange}
          />
          Social Ads
        </label>
        <label className="channels-label">
          <input
            type="checkbox"
            value="Web Management"
            checked={selectedOptions.includes('Web Management')}
            onChange={handleOptionChange}
          />
          Web Management
        </label>
        <button type="button" onClick={handleSubmit} className="channels-button">
          Submit
        </button>
      </form>
      <div className="links">
        {state.objective === 'differentiate' && <Link to="/differentiate-route">Previous</Link>}
        {state.objective === 'lower costs' && <Link to="/lower-costs-route">Previous</Link>}
        {state.objective === 'targeting' && <Link to="/targeting-route">Previous</Link>}
        {state.message && <Link to="/displayMessage">See Recommended Plan</Link>}
      </div>
    </div>
  );
};

export default Channels;
