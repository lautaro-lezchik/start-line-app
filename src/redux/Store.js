/* import { applyMiddleware, createStore } from 'redux'
import myReducer from './Reducer';
import thunk from 'redux-thunk'

const myStore = createStore (myReducer, applyMiddleware(thunk));

export default myStore */

/* const myStore = createStore (myReducer); */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import myReducer from './Reducer';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myStore = createStore(myReducer, composeEnhancer(applyMiddleware(thunk)));

export default myStore;