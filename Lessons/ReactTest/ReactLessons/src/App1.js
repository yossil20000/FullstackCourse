import logo from './logo.svg';
import './App.css';
import MemoChild from './Componnets/MemoChild';
import ChildNoMemo from './Componnets/ChildNoMemo';
//useState is "HOOKS"
import { useState } from 'react';
import ReactComponent from './Componnets/ReactComponent';
import DependencyComponent from './Componnets/DependencyComponent';
import AuthContext from './Context/AuthContext';
import ChildContext from './Componnets/Child/ChildContext';
function App1() {
  const [counter, setCounter] = useState(1);
  const [counterApp, setCounterApp] = useState(1);
  console.log("Render App1");
  return (
    <>
      <h1>Lesson 3 code in app1.js</h1>
      <p>Reminding: Render order from App to it's child unless we cause to cause one of the child populate rendering like using: memo  </p>
      <ul> Rendering Triggers<li>state changed</li><li>props ( ovveride memo of the component)</li><li>any Global State (Context , Redux, etc..)</li></ul>
      <h2>memo</h2>
      <p>'<code>import React , {"{memo}"} from react'</code></p>
      <p>definition: export default memo(MemoChild)</p>
      <p>App1 counterApp value: {counterApp} </p>
      <MemoChild value={counter} />
      <ChildNoMemo />
      <button onClick={() => setCounterApp((prev) => prev + 2)}>Change App1 state</button>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Changd MemoChild prop</button>
      <hr></hr>
      <h2>Js Value Types</h2>
      <p>number,bigint(2n) , symbol, boolean, null and undefined parseFloat(3.14);. string is also a value type although it is implemented with a slightly different behavior to save memory.</p>
      <h2>Js referance type</h2>
      <p>{"const o = new Object();"}</p>
      <p>{"const o = {};"}</p>
      <p>{"const o = []"}</p>
      <p>function</p>
      <hr></hr>
      <h2>React Life Cycle</h2>

      <ul>
        <li><p>componentWillMount : when component start before rendering, use this to bring data from server, files before rendering the data
        </p></li>
        <li>componentWillUnmount : when component is goint to remove from rendering</li>
        <li>componentWillUpdate : when state is going to changed</li>
        <li>
          componentDidUpdate : when state of the component changed
        </li>
      </ul>
      <ReactComponent />
      <hr></hr>
      <h2>Hooks</h2>
      <p>We learned useState, now we learn new one {"useEffect"}</p>
      <h3>useEffect</h3>
      <p>useEffect must be called from from inside function: if not will be error React Hook must be called in the top level.  </p>
      <p>import: {"impoert { useEffect} from 'react'"} </p>
      <p>syntax: {'useEffect(() => { console.log("useEffect Called")})'} this will call every rendering</p>
      <p>Sometimes we don't want to call every rendering </p>
      <h4>useEffect dependedcy</h4>
      <p>syntax : {'useEffect(() => { console.log("dependency [] useEffect Called")},[])'} this will call only one time like componentWillMount</p>
      <DependencyComponent/>
      <hr></hr>
      <h2>Passing referance as property</h2>
      <p>When passing a referance type as property , if the type is a requlat variable, when rendering the property that pass  is new one , since it's by referance every time it's address is change and therefore it's detected as new prop and render the component again.</p>
      <p><b>If you want to pass referance type you can put in in state and the address will not change only the content </b></p>
      <p><b>State use react memory therefore it's persis the state address and value of the state while rendering</b></p>
      <h2>Context</h2>
      <p>Context come to helps us to pass props from one level to a level below but not a direct child on the tree</p>
      <p>Context is global scope for passing parameters to indirect child</p>
      <ul>
        <li>Create Directory Ex. Context</li>
        <li>Create file ex. AuthContext.jsx</li>
        <li>Create a context object 
          <p>{'const AuthContext = React.createContext('}</p>
          <p>{'{Authenticated: "false", Login: () => {}})'}</p>
        </li>
        <li>importing context: {"import AuthContext from './Context/AuthContext'"}</li>
        <li>surround the component you want with context provider
          <p>{"<AuthContext.Provider value={AuthContext}> <Component/> </AuthContext.Provider>"}</p> 
          <p>{'the component and all it`s child can access to the context object'}</p>
        </li>

      </ul>
      <h2> Creating Context Example</h2>
      <h3>We create a ChildeContext component  that include ChildOfChile Component</h3>
      <h4>the value that the ChildOfChild Get is via the Context Mechanizem</h4>
      <AuthContext.Provider value={{Authenticated: "true",Login: () => console.log("Login From AuthContext ")}}>
        <ChildContext/>
      </AuthContext.Provider>
      <hr></hr>
      <h2>Implement componentWillUnmount with function</h2>
      <h3>Use tenary operator to change the rendering component</h3>
      <p>{'By using useEffect in the following syntax'}</p>
      <p>{'useEffect(() => {'}</p>
      <p>{'return () => { console.log("componentWillUnmount")'}</p>
      <p>{'}'}</p>
      <p>{'},[]'}</p>
    </>
  )

}

export default App1;
