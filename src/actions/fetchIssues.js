export function fetchIssues(){

    return (dispatch) => {
        console.log("fetching issues")
        fetch('http://localhost:3000/api/v1/issues',{
            // credentials: "include",
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

export function fetchUserIssues(){
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/issues')
        .then(res => res.json())
        .then(issues => dispatch({
            type: 'FETCH_USER_ISSUES',
            payload: issues
        }))
    }
}