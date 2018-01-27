import {combineReducers} from 'redux';
import { authReducer } from "./src/reducers/authenticationReducers";
import { userReducer } from "./src/reducers/userReducers";
import { exerciseReducer } from "./src/reducers/exerciseReducers";

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    exercises: exerciseReducer
});