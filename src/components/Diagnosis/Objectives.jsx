import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ClientObjectivesForm = ({prevLink, handleChange}) => {
  
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    objective: '',
    budget: '',
    timeline: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    handleChange(name, value);  // Update the parent state
  };

  const handleNextClick = () => {
    if (!formData.objective) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  return (
      <div className="diagnosis-form">
        <h2>Client Objectives</h2>

        <label>
          What is your primary objective with our company?
          <select name="objective" onChange={handleInputChange}>
            <option value="">Select an objective</option>
            <option value="differentiate">Differentiate</option>
            <option value="lower costs">Lower Costs</option>
            <option value="targeting">Targeting</option>
          </select>
        </label>

        <label>
          What is your budget?
          <input
            type="number"
            name="budget"
            placeholder="Enter your budget"
            onChange={handleInputChange}
          />
        </label>

        <label>
          What is your timeline?
          <input
            type="date"
            name="timeline"
            onChange={handleInputChange}
          />
        </label>
        {showWarning && <p className='red'>Please select an objective before continuing.</p>}
      <div className='links'>
      <Link to="/">Previous</Link>
      <Link to={formData.objective === 'differentiate' ? '/differentiate-route' :
                    formData.objective === 'lower costs' ? '/lower-costs-route' :
                    formData.objective === 'targeting' ? '/targeting-route' : '#'}
                    onClick={handleNextClick}
                    >
          Next
        </Link>
      </div>
    </div>
  );
};

export default ClientObjectivesForm;
