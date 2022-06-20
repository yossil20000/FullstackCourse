import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App_1 from './App_1';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
const mode =1;
if(mode === 0)
{
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
       
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
else{
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
       
        <App_1 />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
