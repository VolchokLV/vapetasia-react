import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import Home from './components/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative'>
          <Home />
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
