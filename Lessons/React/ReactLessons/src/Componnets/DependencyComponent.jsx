import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

function DependencyComponent() {
    const [users, setUsers] = useState([]);
    const [counter, setCounter] = useState(0);
    const [functionLog, setFunctionLog] = useState(() => () => console.log("Initial Log"));
   

    useEffect(() => {
        console.log("Use Effect")
    });
    useEffect(() => {
        console.log("useEffect as componentWilmount");
        const fetchData = async () => {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=2');
            console.log(data);
            setUsers(data);
        }
        fetchData();
        
    }, []);
    useEffect(() => {
        console.log("useEffect as counter change");
        functionLog();
    }, [counter,functionLog]);
    return (
        <div>
            <h2>DependencyComponent</h2>
            <h3>Example with fetch axios</h3>
            <h4>Fetch Users in DependencyComponent</h4>
            <ul>
                {
                   users.map((user) => (
                       <li>{user.userId} : {user.title}</li>
                   ))
                }

            </ul>
            <h2>useEffect with dependency on counter</h2>    
            <h3>Counter : {counter} (We can see in console useEffect calling)</h3>
            <button onClick={() => setCounter((prev) => prev + 1)}>Set Counter Add 1</button>
            <h3>Hook a function</h3>
            <div>Change theCounter: <button onClick={() => setCounter((prev) => prev + 1)}>Set Counter Add 1</button></div>
            <p> This button change the console.log with the counter as value : 

            <button onClick={() => setFunctionLog((prev) => () => console.log(`Hook Log : ${counter}`))}>Change Hook Function</button>
            <div>This will execute the new log function<button onClick={() => functionLog()}>Call the current Consol.log</button></div>
            </p>
            
        </div>
    )
}

export default DependencyComponent