import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Diagnosis from './components/Diagnosis/Diagnosis';
import ClientObjectivesForm from './components/Diagnosis/Objectives';
import 'bootstrap/dist/css/bootstrap.min.css';
import LowerCosts from './components/Diagnosis/LowersCosts';
import Differentiate from './components/Diagnosis/Differentiate';
import Targeting from './components/Diagnosis/Targeting';
import Channels from './components/Diagnosis/Channels';
import './App.css'

const init_state = {
  selectedDiagnosis:'',
  objective:'',
  d1:'',
  d2:'',
  l1:'',
  l2:'',
  t1:'',
  t2:'',
  budget: '',
  timeline: '',
  additionalInfo: ''
}

const App = () => {
  const [state, setState] = useState(init_state);
  const [prevLink, setPrevLink] = useState('')
  console.log(state)

  const handleChange = (key, value) => {
    setState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };
  
  

  return (
    <div className='app-container'>
    <Router>
        <Routes>
          <Route path='/' element={<Diagnosis
            handleChange={handleChange}
          />} />
          <Route path="/objectives" element={<ClientObjectivesForm handleChange={handleChange} />} />
          <Route path='/lower-costs-route' element={<LowerCosts handleChange={handleChange} />}/>
          <Route path='/targeting-route' element={<Targeting handleChange={handleChange} />}/>
          <Route path="/differentiate-route" element={<Differentiate handleChange={handleChange} />} />
          <Route path='/next-link' element={<Channels state={state} handleChange={handleChange} />}/>
        </Routes>
        </Router>
      </div>
  );
};

export default App;
