const initialState = {
    issues: [],
    userIssues: []
}

export default function issueReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ISSUES':
            return {...state, issues: action.payload} 
        case 'SET_USER_ISSUES':
            return {...state, userIssues: action.payload}
        case 'ADD_USER_ISSUES':
            return {...state, userIssues: action.payload}
        default:
            return state
    }
}