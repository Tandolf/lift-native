import {
    SET_TOKEN
} from './actions'

const initialState = {};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, ...action.tokenData };
        default:
            return state;
    }
}