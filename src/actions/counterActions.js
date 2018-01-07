import * as types from '../actions/actionTypes';

export const incrementCounter = () => {
    return {
        type: types.INCREMENT_COUNTER
    };
};

export const decrementCounter = () => {
    return {
        type: types.DECREMENT_COUNTER
    };
};
