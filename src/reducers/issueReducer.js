export default function issueReducer(state = {issues: []}, action) {
    switch (action.type) {
        case 'FETCH_ISSUES':
            return {...state, issues: action.payload} 
    }
    return state
}