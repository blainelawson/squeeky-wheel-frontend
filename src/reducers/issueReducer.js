const initialState = {
    issues: [],
    userIssues: []
}

export default function issueReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_ISSUES':
            return {...state, issues: action.payload} 
        case 'FETCH_USER_ISSUES':
            return {...state, userIssues: action.payload}
        case 'ADD_USER_ISSUES':
            return {...state, userIssues: action.payload}
        default:
            return state
    }
}