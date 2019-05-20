import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer, initialState } from './reducer';
import './index.css';
import App from './App';

//This logger is just to see store changes in browser console
const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
};

const store = createStore(reducer, initialState, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
