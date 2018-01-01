import {
    SET_TOKEN
} from './actions'

const initialState = {
    token: "",
};

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.token };
        default:
            return state;
    }
}

export default loginReducer