import * as types from '../actions/actionTypes';
import initialState from './initialState';

const counterReducer = (state = initialState.counter, action) => {
    switch(action.type) {
        case types.INCREMENT_COUNTER:
            return {
                ...state,
                value: state.value + 1
            };
        case types.DECREMENT_COUNTER:
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state;
    }
};

export default counterReducer;
