import React, { useState,useContext} from 'react'
import {Person,setPerson} from '../../interface/person'
import { useNavigate } from 'react-router-dom';
import Form from '../../Components/Form/Form'
import { FormMode } from '../../enum/FormMode';
import Context from '../../Context/context'
import AppContext from '../../interface/AppContext';
const { v4: uuidv4 } = require('uuid');



const CreateScreen = () => {
  

  const {persons,setPersons} = useContext(Context) as AppContext;

  const navigate = useNavigate();
  const [name,setName] = useState('')
  const [title,setTitle] = useState('')
  const [email,setEmail] = useState('')
  const [imageUrl,setImageUrl] = useState('')
  const [telephone,setTelephone] = useState('')
  const [role,setRole] = useState('')


  const addPerson = () =>{
    const copyList = [...persons]
    copyList.push({
        id:uuidv4(),
        name,
        title,
        email,
        imageUrl,
        telephone,
        role
    })
    setPersons(copyList)
    navigate('/home')
  }

 
  
  return (
      <Form 
         setPersonDetails={{setName,setTitle,setEmail,setImageUrl,setTelephone,setRole} as setPerson}
         handleClick={addPerson}
         personDetails={{name,title,email,imageUrl,telephone,role} as Person}
         mode={FormMode.CREATE}
      />
  )
}

export default CreateScreen