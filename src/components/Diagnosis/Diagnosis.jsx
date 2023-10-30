import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Diagnosis = ({ handleChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (newTopic) => {
    // Toggle the radio button selection
    if (selectedOption === newTopic) {
      setSelectedOption(null);
      handleChange('selectedDiagnosis', null);
    } else {
      setSelectedOption(newTopic);
      handleChange('selectedDiagnosis', newTopic);
    }
  };

  return (
    <div className="diagnosis-form">
      <h4>Which plan entices you?</h4>
      <div>
        <label>
          <input
            type="radio"
            value="Marketing"
            checked={selectedOption === 'Marketing'}
            onChange={() => handleSelect('Marketing')}
          />
          Marketing
        </label>
        <label>
          <input
            type="radio"
            value="Management"
            checked={selectedOption === 'Management'}
            onChange={() => handleSelect('Management')}
          />
          Management
        </label>
      </div>
      <div className='links'>
        <Link to="/objectives">Next</Link>
      </div>
    </div>
  );
};

export default Diagnosis;
