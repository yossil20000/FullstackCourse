import React, { useState } from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import HomeScreen from '../Screen/HomeScreen/HomeScreen'
import CreateScreen from '../Screen/CreateScreen/CreateScreen'
import Person from '../interface/person'
import EditScreen from '../Screen/EditScreen/EditScreen'




const Router = () => {

  const [persons,setPersons] = useState<Person[]>(
    [
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
    ]
  
  )
  
  return (
    <Routes>
          <Route path="/home" element={<HomeScreen persons={persons} setPersons={setPersons} />} />
          <Route path="/edit/:id" element={<EditScreen persons={persons} setPersons={setPersons}/>} />
          <Route path="/create" element={<CreateScreen setPersons={setPersons} persons={persons} />} />
          <Route path="*"  element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default Router