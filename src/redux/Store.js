import { applyMiddleware, createStore } from 'redux'
import myReducer from './Reducer';
import thunk from 'redux-thunk'

const myStore = createStore (myReducer, applyMiddleware(thunk));
/* const myStore = createStore (myReducer); */

export default myStore