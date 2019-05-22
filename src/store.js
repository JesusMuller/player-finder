import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducer';

//This logger is just to see store changes in browser console
//discomment to launch and and to applyMiddlewarea as parameter
/*
    const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
};
*/

export default createStore(reducer, applyMiddleware(thunk));
