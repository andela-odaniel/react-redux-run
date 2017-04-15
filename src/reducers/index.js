import { combineReducers } from 'redux';
import towns from './townReducer';

const rootReducer = combineReducers({
    towns
});

export default rootReducer;