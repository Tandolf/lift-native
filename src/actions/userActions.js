import { get } from '../api/userApi';

export const FETCH_USER = 'FETCH_USER';
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';


export function getUser(userId) {
    return (dispatch, getState) => {
        return get(getState().auth.access_token, userId)
            .then(response => {
                if(response.ok) {
                    return response.json();
                } else {
                    console.log("there was an error: " + response.status);
                }
            }).then((json => {
                    dispatch(setUser(json));
            })).catch(error => {
                console.error(error);
            });
    }
}

export function setUser(user) {
    return {
        type: 'SET_USER',
        user
    }
}

export function clearUser() {
    return {
        type: 'CLEAR_USER'
    }
}