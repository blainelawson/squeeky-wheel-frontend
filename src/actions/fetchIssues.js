export function fetchIssues(){

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/issues',{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(issues => dispatch({
            type: 'FETCH_ISSUES',    
            payload: issues
        }))
    }
}

// typically return {type: 'whatever', payload: }

export function fetchUserIssues(currentUser){
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/issues`)
        .then(res => res.json())
        .then(issues => dispatch({
            type: 'FETCH_USER_ISSUES',
            payload: issues
        }))
    }
}