import Person from "../interface/person";

export type PersonsType = {
    setPersons:React.Dispatch<React.SetStateAction<Person[]>>
    persons:Person[]
  };