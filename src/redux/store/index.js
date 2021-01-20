import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from "redux-localstorage";

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk),
    persistState(["heroes"])
));

export default store;