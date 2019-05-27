import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import PlayerFinderContainer from './components/player-finder-container';

import { reducer } from './reducers/reducer';

import './index.scss';

//uncomment to launch logger middleware and add as parameter to applyMiddleware
/*
const logger = store => next => action => {
console.log('dispatching', action)
let result = next(action)
console.log('next state', store.getState())
return result
};
*/

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <PlayerFinderContainer />
    </Provider>
, document.getElementById('root'));
