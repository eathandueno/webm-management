import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Differentiate = ({ handleChange }) => {
  
  const [formData, setFormData] = useState({
    d1: '',
    d2: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    handleChange(name, value);  // Update the parent state
  };

  return (
    <div className="objective-form">
      <h2>Differentiate Your Business</h2>

      <label>
        What sets your business apart from competitors?
        <input 
          type="text" 
          name="d1"
          placeholder="Your answer" 
          onChange={handleInputChange} 
        />
      </label>

      <label>
        What is your unique value proposition?
        <input 
          type="text" 
          name="d2"
          placeholder="Your answer" 
          onChange={handleInputChange} 
        />
      </label>

      <div className="links">
        <Link to="/objectives">Previous</Link>
        <Link to={{ pathname: '/next-link', state: '/differentiate-route' }}>Next</Link>
      </div>
    </div>
  );
};

export default Differentiate;
