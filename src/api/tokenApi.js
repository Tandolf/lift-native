export function login(loginFormData) {
    return fetch('https://lift-auth-service.herokuapp.com/uaa/oauth/token', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: 'Basic aW9zOnNlY3JldA==',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: loginFormData
    });
}