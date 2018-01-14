import {
    SET_TOKEN,
    DELETE_TOKEN
} from './actions'

const initialState = {
    access_token: undefined
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, ...action.tokenData };
        case DELETE_TOKEN:
            return initialState;
        default:
            return state;
    }
}