import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter} from 'react-router-dom'; 
import App from './App';
import * as serviceWorker from './serviceWorker';
// Redux 
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/index.js'
import thunk from 'redux-thunk'

const store  = createStore( rootReducer, applyMiddleware(thunk))


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App store={store}/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
