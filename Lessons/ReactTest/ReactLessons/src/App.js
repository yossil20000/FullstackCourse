import logo from './logo.svg';
import './App.css';
import Navigation from './Componnets/Navigation';
import Child from './Componnets/Child';
import Child2 from './Componnets/Child2';
import Child3 from './Componnets/Child3';
import Welccome from './Componnets/Wellcome';
//useState is "HOOKS"
import { useState } from 'react';
console.log("Render App");
function App() {

  const dataFromParent = "Data From App";

  const info = { name: "Yoss", id: 1 };
  // object distructure
  const { name, id } = info;
  const [nameOfState, setName] = useState("Any Object");
  // create state counter with initial value 0
  // useState is a HOOK that give us the functionality of state
  const [counter, setCounter] = useState(0);

  let CounterChange = (increment) => {
    //this is async operation
    //each state has it's own prevState
    setCounter((prevState) => (prevState + increment));

  }
 
  //React can't render object {kry:, value:}
  //but can render array
  const [arrayState, setArry] = useState([1, 2, 3, 4]);
  let addToarrayState = function(clear=false){
    if(clear)
    {
      setArry([1]);  
      return;
    }
    const copy = [...arrayState];
    let lastElemnt = copy[copy.length-1];
    copy.push(lastElemnt +1);
    setArry(copy);
  }
  return (
    <div>
      <h1>React Lesson 2 30/03/22</h1>
      <Navigation />
      <Welccome />
      <Child x={`To Child: ${dataFromParent}`} />
      <Child2 data={info} y={8} />
      <Child3 data={info} y={8} />
      <hr></hr>
      <h2>Events: </h2>
      <h3>onClick is Also component by it's self and is property </h3>
      <div>
        <button onClick={() => console.log("Hello Click On Button")}>Click to console.log</button>
      </div>
      <div>
        <h3>Input element with onChange event</h3>
        <input placeholder="enter text to console.log" onChange={(e) => console.log(e.target.value)}></input>
      </div>
      <hr></hr>

      <h4>State In React</h4>
      <div>Printing the nameOfState state: "{nameOfState}"</div>
      <h4>Counter State</h4>
      <h3>counter state: {counter} <button onClick={() => setCounter(2)}>Set Couter to 2</button> </h3>

      <div>
        When we setCouter(value) 2 things happens
        <ul>
          <li>update the state</li>
          <li>cause to render the page: from the currrent point to all the childrens down the tree</li>
          <li>F5 / or Refresh the page will initiate to the initial state</li>
          <li color="red">DO NOT change state Manually. Only via his setter</li>
        </ul>

      </div>
      <h4>Counter using setter with the previousValue </h4>
      <h5>counter state: {counter} <button onClick={() => CounterChange(2)}>Increment Counter by 2</button>  </h5>

      <h2>Rendering array</h2>
      <div>
        <div>
          <button onClick={() => { setArry([1, 2, 3, 4, 5]) }}>Add Element</button>
        </div>
        {
          arrayState.map((el) => <li>{el}</li>)

        }

      </div>
      <h4>Using Array Spread Operator more convinent from contact</h4>
      <h3>const c = [...a,...b]</h3>
      <h3>Copy array a: c = [...a] </h3>
      <h4>Adding element to arrayState</h4>
      <div>
      <div>
          <button onClick={ () => addToarrayState(false)}>Add Element with spresd operator</button>
          <button onClick={ () => addToarrayState(true)}>Remove All Element</button>
          <ul>
          {
          arrayState.map((el) => <li>With Spread: {el}</li>)

        }
          </ul>
        </div>
      </div>
      <h2>Renderin Rulls</h2>
      <p>if child render father not render it self</p>
      <p>the render mechanizem cause trigger all its chiled to render</p>
      <h2>Rendering Triggers</h2>
      <ul>
        <li>State</li>
        <li>props</li>
        <li>Global state : Redux</li>
      </ul>
      

    </div>
  );
}

export default App;
