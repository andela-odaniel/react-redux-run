import * as types from './actionTypes';
import townsApi from '../api/mockTownsApi';

export function loadTownsSuccess(towns) {
    return {
        type: types.LOAD_TOWNS_SUCCESS, towns
    };
}

export function loadTowns() {
    // a thunk always return a function that accept dispatch
    return function (dispatch) {
        // inside the body of thunk
        return townsApi.getAllTowns().then(towns => {
            dispatch(loadTownsSuccess(towns));
        }).catch(error => {
            throw (error);
        });
    };
}