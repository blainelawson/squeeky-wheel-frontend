import { resetLoginForm } from './loginForm'


// SYNCHRONOUS ACTION CREATORS
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
        // same as payload: user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// ASCYNCHRONOUS ACTION CREATORS
export const login = loginCredentials => {
    return (dispatch) =>  {
        return fetch("http://localhost:3000/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(loginCredentials)
        })
        .then(r => r.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            }else{
                dispatch(setCurrentUser(user))
                dispatch(resetLoginForm())
            }
        })
        .catch(console.log)
    }

}

export const getCurrentUser = () => {
    return (dispatch) =>  {
        return fetch("http://localhost:3000/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(r => r.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            }else{
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }

}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser());
        return fetch("http://localhost:3000/logout", {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

}