//  synchronous actions

export function setIssues(issues) {
    return {
        type: 'SET_ISSUES',
        payload: issues
    }
}

export function setUserIssues(issues) {
    return {
        type: 'SET_USER_ISSUES',
        payload: issues
    }
}


//  async actions

export function fetchIssues(){

    return (dispatch) => {
        fetch('https://squeeky-wheel-api.herokuapp.com/api/v1/issues',{
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(issues => dispatch(setIssues(issues)))
    }
}

// typically return {type: 'whatever', payload: }

export function fetchUserIssues(currentUser){
    return (dispatch) => {
        fetch(`https://squeeky-wheel-api.herokuapp.com/api/v1/users/${currentUser.id}/issues`,
        {credentials: "include"})
        .then(res => res.json())
        .then(issues => dispatch(setUserIssues(issues)))
    }
}

export function fetchNotUserIssues(currentUser){
    return (dispatch) => {
        fetch(`https://squeeky-wheel-api.herokuapp.com/api/v1/users/${currentUser.id}/not_user_issues`,
        {credentials: "include"})
        .then(res => res.json())
        .then(issues => dispatch(setIssues(issues)))
    }
}