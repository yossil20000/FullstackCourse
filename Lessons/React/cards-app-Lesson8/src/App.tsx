import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from '@mui/material/Checkbox';
import {BrowserRouter} from 'react-router-dom';
import Router from './router/router'
import Person from './interface/person';
import PersonsContext from './Context/Context';
import { PersonsType } from './Types/types';


function App() {

   
   const [persons, setPersons] = useState<Person[]>([
      {
         id:'1',
         name: 'shay',
         title: 'Regional Paradigm Technician',
         role: 'Admin',
         email: 'janecooper@example.com',
         telephone: '+1-202-555-0170',
         imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
       },
       {
         id:'2',
         name: 'Jane Cooper',
         title: 'Regional Paradigm Technician',
         role: 'Admin',
         email: 'janecooper@example.com',
         telephone: '+1-202-555-0170',
         imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
       },
       {
         id:'3',
         name: 'Galit Lior',
         title: 'Regional Paradigm Technician',
         role: 'Admin',
         email: 'janecooper@example.com',
         telephone: '+1-202-555-0170',
         imageUrl:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
       },
   ]);

   const personsAction : PersonsType = {
      persons,
      setPersons
   }

  return (
     <PersonsContext.Provider value={personsAction}>
            <BrowserRouter>
        <Router /> 
     </BrowserRouter>
     </PersonsContext.Provider>
 
  );
}

export default App;
