import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* Google Fonts */
import './styles/google-fonts.css';
/* Main Vapetasia CSS (ported) */
import './styles/vapetasia-global.css';
/* Other Vapetasia CSS */
import './styles/vapetasia-custom.css';
/* Warning Bar Styles and other */
import './styles/warning-bar-plus-other-custom.css';
/* VAPE FONT */
import './styles/vape-font.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);

