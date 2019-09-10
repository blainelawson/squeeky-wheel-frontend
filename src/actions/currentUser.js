// SYNCHRONOUS ACTION CREATORS
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
        // same as payload: user
    }
}


// ASCYNCHRONOUS ACTION CREATORS
export const login = credentials => {console.log('here in the login action')
        return fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        
    

    
}