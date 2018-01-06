import { SET_USER } from './actions'

const initialState = {
    name: {
        formatted: ""
    }
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, ...action.user };
        default:
            return state;
    }
}