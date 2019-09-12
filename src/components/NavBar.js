import React from 'react'
import { connect } from 'react-redux'

import Login from "./Login"
import Logout from "./Logout"

const NavBar = ({ currentUser }) => {
    return (
        <div style=
        {{
            backgroundColor: "#5AC205"
        }}>
            {currentUser ? <Logout /> : <Login />}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps, null)(NavBar)