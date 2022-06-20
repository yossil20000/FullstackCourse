import React, { useState } from 'react'
import Person from '../../interface/person'
import { useNavigate } from 'react-router-dom';
import Form from '../../Components/Form/Form'
import { FormMode } from '../../Enums/FormMode';
const { v4: uuidv4 } = require('uuid');

type createScreenProps = {
    setPersons:React.Dispatch<React.SetStateAction<Person[]>>
    persons:Person[]
}


const CreateScreen = ({setPersons,persons}:createScreenProps) => {


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
         setName={setName}
         setTitle={setTitle}
         setEmail={setEmail}
         setImageUrl={setImageUrl}
         setTelephone={setTelephone}
         setRole={setRole}
         handleClick={addPerson}
         personDetailes = {{name,title,email,imageUrl, telephone,role} as Person}
         mode = {FormMode.CREATE}
      />
  )
}

export default CreateScreen