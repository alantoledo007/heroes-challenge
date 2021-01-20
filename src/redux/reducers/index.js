import { combineReducers } from 'redux';

import heroes from './heroes';

const reducers = combineReducers({
    heroes
})

export default reducers;