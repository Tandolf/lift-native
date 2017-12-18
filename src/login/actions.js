export const SET_TOKEN = 'SET_TOKEN';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';


export function setToken(token) {
    return { type: SET_TOKEN, token }
}

export function setUsername(username) {
    return { type: SET_USERNAME, username }
}

export function setPassword(password) {
    return { type: SET_PASSWORD, password }
}