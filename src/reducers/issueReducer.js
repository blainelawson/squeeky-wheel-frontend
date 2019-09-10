export default function issueReducer(state = {issues: []}, action) {
    switch (action.type) {
        case 'FETCH_ISSUES':
            return {...state, issues: action.payload} 
        case 'FETCH_USER_ISSUES':
            return {...state, }
    }
    return state
}