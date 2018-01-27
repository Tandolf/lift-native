import {
    SET_EXERCISES
} from '../actions/exerciseActions'

const initialState = {};

export function exerciseReducer(state = initialState, action) {
    switch (action.type) {
        case SET_EXERCISES:
            return { ...state, ...action.exercises };
        default:
            return state;
    }
}