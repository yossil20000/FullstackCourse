import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from '@mui/material/Checkbox';
import {BrowserRouter} from 'react-router-dom';
import Router from './router/router'



function App() {



  return (
     <BrowserRouter>
        <Router /> 
     </BrowserRouter>
  );
}

export default App;
