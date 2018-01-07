import {combineReducers} from 'redux';
import { authReducer } from "./src/login/reducers";
import { userReducer } from "./src/home/reducers";

export default combineReducers({
    auth: authReducer,
    user: userReducer
});