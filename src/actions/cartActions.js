export const  addUserIssues = (issueId) => {
    return (dispatch) => {

        return fetch('http://localhost:3000/add_user_issue', {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(issueId)
        })
        .then(r => console.log(r.json))
    }
}