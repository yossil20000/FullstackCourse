import React from 'react'
import {Link,useHistory} from 'react-router-dom';

import '../App.css';
import ComponentA from '../Components/ComponentA';
import ComponentB from '../Components/ComponentB';
import ComponentLink from '../Components/ComponentLink';
function ExamplePage() {
    const history = useHistory();
    console.log(history);
    const clickHandler = ()=> {
        console.log("clickHandler pass1");
        console.log("clickHandler pass2");
        console.log("clickHandler pass3");
        history.push("/info");
        
    }   
    return (
        <>
            <h1>ExamplePage</h1>
            <h1>React Lesson 06_04_22</h1>
            <h2>Router</h2>
            <h3>syntax: </h3>
            <p>{'<BrowserRouter>'}</p>
            <p>{'/// <Switch>: Take only the first path that MATCH'}</p>
            <p className='margin-left-1'>{'<Switch>'}</p>
            <p>{'/// property: exact={true} mean that the path MUST BE MATCH if we don`t use exact the ALL MATCH will be taken'}</p>
            <p>{'/// One way to render component by using: component={HomePage}'}</p>
            <p className='margin-left-2'>{'<Route path="/" component={HomePage} exact={true}/>'}</p>
            <p>{'// Another way to render is by using:  render={() => <ExamplePage/>} with this way you can pass props to component'}</p>
            <p className='margin-left-2'>{'<Route path="/example" render={() => <ExamplePage/>}/>'}</p>
            <p>{''}</p>
            <p className='margin-left-1'>{'</Switch>'}</p>
            <p>{'</BrowserRouter>'}</p>
            <hr></hr>

            <h3>DO NOT USE EVER ROUTER FOR INNER LINK BY {'<a href="/info"></a>'}</h3>
            <h3>YOU CAN USE {'<a href="/info"></a>'} FOR OUTER LINK</h3>
            <hr></hr>
            <h2>Children Props</h2>
            <p>When ComponentB is "Inside" other componentA then ComponentB is a children of ComponentA</p>
            <h3>Syntax</h3>
            <p>{'<ComponentA>'}</p>
            <p className='margin-left-1'>{'<ComponentB/>'}</p>
            <p>{'</ComponentA>'}</p>
            <ul><h4><u>Highlight</u></h4>
            <li><p><b>{'ComponentA can use ComponentB by getting  {props.children} inside ComponentA'}</b></p></li>
            <li><p><b>{'the props "children" is define automatically by react'}</b></p></li>
            <li><p><b>You can put any number of children`s inside parent</b></p></li>
            <li><p><b>Usage:</b> if you have a display pattern that repeat in some places, then you can reuse the Component without repeating writting new code</p></li>
            </ul>          
            <h4>Example Children</h4>
            <ComponentA>
                <ComponentB value={1}/>
                <ComponentB value={2}/>
            </ComponentA>
            <hr></hr>
            <h2>Link Example</h2>
            <ComponentLink/>
            <hr></hr>
            <h2>useHisory Hook</h2>
            <p>Import: {'import {useHistory} from "react-router-dom" '}</p>
            <p>Using: {'history = useHistory'}</p>
            <p>Navigate with history: history.push("route") this will redirect to the routh path</p>
            <p>{'useHistory only until react-router-dom 5.2'}</p>
            <p>{'react-router-dom 6 and above useNavigate  '}</p>
            <p>Redirect cant be use in this example because we cany pu component inside function</p>

            <button className='margin-left-1' onClick={clickHandler}>clickHandler</button>
            <hr></hr>
            <h2>useParams</h2>
            <p>Another Hook useParams in {'{useParams} from "react-router-dom'}</p>
            <p>enable us to hook routre path parameters</p>
            <p>for example: {'<Route path="/info/:id" render={() => <InfoPage/>} exact={true}/>'}</p>
            <p>In the url enter: /info/4 you will see the params printed in InfoPage</p>

        </>
    )
}

export default ExamplePage