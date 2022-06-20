import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

// for React query
import {useQuery} from 'react-query';
import fetchPosts from './app/Service/Fetch/FetchApi';
import Form from './app/Components/Form/Form'

function App() {
  const {data, error, isError, isLoading} = useQuery('users',fetchPosts)
  if(isLoading){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>Error! {error.message}...</div>
  }
  return (
    <div className=''>
      <h1 className='container'>Users Name</h1>
      {
        data.map((users,id) => {
          return <li className='container' key={id}>{users.name}</li>
        })
      }
      <Form/>
    </div>
  );
}

export default App;
