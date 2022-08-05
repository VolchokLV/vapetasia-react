import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import "./index.css"
import Home from './pages/home/Home'
import Disposables from './pages/disposables/Disposables'


function App() {
  return (
    <div>
      <BrowserRouter>
        
          <Home />


      </BrowserRouter>
      
    </div>
  );
}

export default App;
