import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import InfoPage from './Pages/InfoPage';
import ExamplePage from './Pages/ExamplePage';
import './App.css';

function App_1() {
    return (
        <>
 
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={HomePage} exact={true}/>
                    <Route path='/info' render={() => <InfoPage/>} exact={true}/>
                    <Route path='/info/:id' render={() => <InfoPage/>} exact={true}/>
                    <Route path='/example' render={() => <ExamplePage/>} exact={true}/>
                    <Route path='*' render={() => <HomePage/>}/>
                </Switch>
                
            </BrowserRouter>
        </>
    );
}

export default App_1;
