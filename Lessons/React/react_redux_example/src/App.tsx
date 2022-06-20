import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Child from './Components/Child/Child';
const appToRun = "AppClass"

function App() {
  return (

    <div className="App">
          <h1 className="text-4xl font-bold underline bg-midnight">
      Hello world!
    </h1>
      <Child color={"green"}/>
   
    
    
    
    </div>
  );
}

export default App;
