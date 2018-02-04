import {
    SET_CURRENT_VIEW
} from '../actions/viewActions'

const initialState = {};

export function viewReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_VIEW:
            return { ...state, currentView: action.currentView };
        default:
            return state;
    }
}