const initialState = {
    issues: [],
    userIssues: []
}


export default function issueReducer(state = initialState, action) {
    let newUserIssues = []

    switch (action.type) {
        case 'SET_ISSUES':
            return {...state, issues: action.payload} 
        case 'SET_USER_ISSUES':
            return {...state, userIssues: action.payload}
        case 'ADD_USER_ISSUE':
            newUserIssues = state.userIssues.concat(action.payload)
            return {...state, userIssues: newUserIssues}
        case 'DELETE_USER_ISSUE':
            newUserIssues = state.userIssues.filter(stateIssue => stateIssue.id !== action.payload.id)
            return {...state, userIssues: newUserIssues}
        default:
            return state
    }
}