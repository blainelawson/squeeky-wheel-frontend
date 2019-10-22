// synchronous actions

export function addSelectionIssue(issue) {
    return {
        type: 'ADD_SELECTION_ISSUE',
        payload: issue
    }
}

export function deleteSelectionIssue(issue){
    return {
        type: 'DELETE_SELECTION_ISSUE',
        payload: issue
    }
}

export function addUserIssue(issue) {
    return {
        type: 'ADD_USER_ISSUE',
        payload: issue
    }
}

export function deleteUserIssue(issue){
    return {
        type: 'DELETE_USER_ISSUE',
        payload: issue
    }
}

// async ations

export const  addUserIssues = (issueId, currentUser) => {
    return (dispatch) => {

        return fetch(`https://squeeky-wheel-api.herokuapp.com/api/v1/users/${currentUser.id}/add_user_issue`, {
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
                dispatch(addUserIssue(issue))
                dispatch(deleteSelectionIssue(issue))
            }
        })
    }
}

export const deleteUserIssues = (issueId, currentUser) => {
    return (dispatch) => {

        return fetch(`https://squeeky-wheel-api.herokuapp.com/api/v1/users/${currentUser.id}/delete_user_issue`, {
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
                dispatch(deleteUserIssue(issue))
                dispatch(addSelectionIssue(issue))
            }
        })
    }
}