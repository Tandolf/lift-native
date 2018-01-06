export function get(token, userId) {
    return fetch('https://lift-service.herokuapp.com/users/' + userId, {
        method: 'Get',
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        }
    });
}