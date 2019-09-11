export default (state= null, action) => {
    // debugger
    console.log('hello ', action.user, ' from currentUser reducer')
    switch (action.type) {
        case "SET_CURRENT_USER":
            return action.user
        default:
            return state
    }
}