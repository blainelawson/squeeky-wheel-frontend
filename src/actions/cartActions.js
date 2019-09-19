// synchronous actions

export function addIssue(issue) {
    return {
        type: 'ADD_USER_ISSUE',
        payload: issue
    }
}

export function deleteIssue(issue){
    return {
        type: 'DELETE_USER_ISSUE',
        payload: issue
    }
}

// async ations

export const  addUserIssues = (issueId, currentUser) => {
    return (dispatch) => {

        return fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/add_user_issue`, {
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

export const deleteUserIssues = (issueId, currentUser) => {
    return (dispatch) => {

        return fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/delete_user_issue`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(issueId)
        })
        .then(r => r.json())
        .then(issue => {
            if (issue.error) {
                alert(issue.error)
            }else{
                dispatch(deleteIssue(issue))
            }
        })
    }
}