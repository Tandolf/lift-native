import { login } from '../api/tokenApi';

export const SET_TOKEN = 'SET_TOKEN';

export function setToken(tokenData) {
    return { type: SET_TOKEN, tokenData }
}

export function getToken(loginFormData) {
    return (dispatch, getState) => {
        return login(loginFormData)
        .then(response => {
            if(response.ok) {
                return response.json();
            } else {
                console.log("there was an error: " + response.status);
            }
        }).then((json => {
            dispatch(setToken(json));
        })).catch(error => {
            console.error(error);
        });
    }
}