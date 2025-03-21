import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router,Switch,Route,Routes, Navigate} from 'react-router-dom';
import DemoPropComp from './components/demopropComponent';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/prop1' element={<DemoPropComp />} />
          
        
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
