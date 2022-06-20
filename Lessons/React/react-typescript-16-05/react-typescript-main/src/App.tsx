import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Components/Child/Child'
import Checkbox from '@mui/material/Checkbox';
import {BrowserRouter} from 'react-router-dom';
import Router from './router/router'
import Navigation from './Components/Navigation/Navigation'

function App() {



  return (
     <BrowserRouter>
       <Child /> 
       {/* <Navigation />
       <Router />  
       <h1>footer</h1> */}
     </BrowserRouter>
  );
}

export default App;
