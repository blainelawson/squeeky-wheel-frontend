// synchronous actions

export function addIssue(issue) {
    return {
        type: 'ADD_USER_ISSUE',
        payload: issue
    }
}


// async ations

export const  addUserIssues = (issueId) => {
    return (dispatch) => {

        return fetch('http://localhost:3000/add_user_issue', {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(issueId)
        })
        .then(r => r.json())
        .then(issue => {
            if (issue.error) {
                alert(issue.error)
            }else{
                dispatch(addIssue(issue))
            }
        })
    }
}