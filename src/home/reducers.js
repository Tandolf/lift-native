import {
    CLEAR_USER,
    SET_USER
} from './actions'

const initialState = {
    id: undefined,
    name: {
        formatted: undefined
    }
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, ...action.user };
        case CLEAR_USER:
            return initialState;
        default:
            return state;
    }
}