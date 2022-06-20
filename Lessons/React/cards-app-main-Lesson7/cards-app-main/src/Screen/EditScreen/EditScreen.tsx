import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import Form from '../../Components/Form/Form';
import { FormMode } from '../../Enums/FormMode';
import Person from '../../interface/person';

import { useNavigate } from 'react-router-dom';

type EditScreenProps = {
  setPersons:React.Dispatch<React.SetStateAction<Person[]>>
  persons:Person[]
}

const EditScreen = ({setPersons,persons}:EditScreenProps) => {
  const navigate = useNavigate();
  const params = useParams();
  const [editPerson,setEditPerson] = useState<Person>();
  const [name,setName] = useState('')
  const [title,setTitle] = useState('')
  const [email,setEmail] = useState('')
  const [imageUrl,setImageUrl] = useState('')
  const [telephone,setTelephone] = useState('')
  const [role,setRole] = useState('')

  const findPersons = () => {
    const person = persons.find((person:Person) => (person.id.toString() == params.id));
    
    setEditPerson(person);
  }
  useEffect(() => {
    findPersons();
  },[]);
  useEffect(() => {
    if(editPerson){
      setName(editPerson.name);
      setTitle(editPerson.title);
      setEmail(editPerson.email);
      setImageUrl(editPerson.imageUrl);
      setTelephone(editPerson.telephone);
      setRole(editPerson.role);
    }
  },[editPerson]);
  console.log(name,email);

  const OnEditPerson = () =>{
    console.log("OnEdit Click");
    const indexPersonToEdit = persons.findIndex((person:Person) => (person.id.toString() == params.id));
    const copyList = [...persons];
    copyList.splice(indexPersonToEdit, 1)
    console.log("index:" ,indexPersonToEdit);
    console.log("New List", persons)
    navigate("/home");
  }
  return (
    <Form 
    setName={setName}
    setTitle={setTitle}
    setEmail={setEmail}
    setImageUrl={setImageUrl}
    setTelephone={setTelephone}
    setRole={setRole}
    handleClick={OnEditPerson}
    personDetailes = {{name,title,email,imageUrl, telephone,role} as Person}
    mode = {FormMode.EDIT}
 />
  )
}

export default EditScreen


