import React,{useState} from "react";
import { useMutation } from "react-query";
import axios from "axios";
import '../../../App.css'

const Form = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('');

    const {isLoading, isError, error,mutate} = useMutation(createName);

    async function createName() {
        const response = axios.post('https://jsonplaceholder.typicode.com/users')
        setMessage((await response).data);
    }
    const onChange = (e) => {
        setName(e.target.value)
    }

    const Create = () => {
       mutate({id: Date.now(), name})
    }

    return(
        <>
        <div className="">
            <h1>Name</h1>
            <label>List of names:</label>
            <input type="text" value={name} onChange={onChange}/>
            <button onClick={Create}>Create</button>
            <p>Create a new Name ID: {message  && message.id}</p>
            <div className="">
                {isLoading ? "updating..." : ""}
                {isError ? error.message : ""}

                
            </div>
        </div>
        </>
    )
}

export default Form