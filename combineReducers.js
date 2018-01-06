import {combineReducers} from 'redux';

// reducers
import { loginReducer } from "./src/login/reducers";
import { userReducer } from "./src/home/reducers";

export default combineReducers({
    login: loginReducer,
    user: userReducer
});