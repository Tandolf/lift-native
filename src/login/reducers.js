import {
    SET_TOKEN,
    SET_USERNAME,
    SET_PASSWORD,
} from './actions'

const initialState = {
    token: "",
    username: "",
    password: "",
};

function liftApp(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.token };
        case SET_USERNAME:
            return { ...state, username: action.username };
        case SET_PASSWORD:
            return { ...state, password: action.password };
        default:
            return state;
    }
}

export default liftApp