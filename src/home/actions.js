import { get } from '../api/userApi';

export const FETCH_USER = 'FETCH_USER';
export const SET_USER = 'SET_USER';


export function fetchUser(userId) {
    return (dispatch, getState) => {
        return get(getState().login.token, userId)
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