import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function townReducer(state = initialState.towns, action) {
    switch (action.type) {
        case types.LOAD_TOWNS_SUCCESS:
            return action.towns;    
            // return [...state,
            //     Object.assign({}, action.town)
            // ];
        default:
            return state;    
    }
}