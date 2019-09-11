// SYNCHRONOUS ACTION CREATORS
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
        // same as payload: user
    }
}


// ASCYNCHRONOUS ACTION CREATORS
export function login(loginCredentials) {
    return (dispatch) => {
        fetch("http://localhost:3000/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginCredentials)
        })
        .then(r => r.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            }else{
                dispatch(setCurrentUser(user))
            }
        })
    }

}