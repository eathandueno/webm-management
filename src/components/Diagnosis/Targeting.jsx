import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Targeting = ({ handleChange }) => {
  
  const [formData, setFormData] = useState({
    t1: '',
    t2: ''
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
      <h2>Targeting</h2>

      <label>
        Who is your target audience?
        <input 
          type="text" 
          name="t1"
          placeholder="Your answer" 
          onChange={handleInputChange} 
        />
      </label>

      <label>
        What channels are most effective for reaching them?
        <input 
          type="text" 
          name="t2"
          placeholder="Your answer" 
          onChange={handleInputChange} 
        />
      </label>

      <div className="links">
        <Link to="/objectives">Previous</Link>
        <Link to={{ pathname: '/next-link', state: '/targeting-route'  }}>Next</Link>
      </div>
    </div>
  );
};

export default Targeting;
