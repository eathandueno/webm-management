import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LowerCosts = ({ handleChange }) => {
  
  const [formData, setFormData] = useState({
    l1: '',
    l2: ''
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
      <h2>Lower Costs</h2>

      <label>
        What are your major cost drivers?
        <input 
          type="text" 
          name="l1"
          placeholder="Your answer" 
          onChange={handleInputChange} 
        />
      </label>

      <label>
        What cost-saving measures have you tried?
        <input 
          type="text" 
          name="l2"
          placeholder="Your answer" 
          onChange={handleInputChange} 
        />
      </label>

      <div className="links">
        <Link to="/objectives">Previous</Link>
        <Link to={{ pathname: '/next-link', state: { from: '/lower-costs-route' } }}>Next</Link>
      </div>
    </div>
  );
};

export default LowerCosts;
