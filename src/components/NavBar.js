import React from 'react'
import { connect } from 'react-redux'

import Login from "./Login"
import Logout from "./Logout"

import "../App.css"

const NavBar = ({ currentUser }) => {
    return (
        <div>
            <ul class="navbar">
                <li class="navbar">
                    <a href="/#">Home</a>
                </li>
                <li class="navbar">
                    <a href="/#">About</a>
                </li>
                <li class="navbar">
                    <a href="/#">Contact</a>
                </li>
                <li class="login">
                    {currentUser ? <Logout /> : <Login />}
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps, null)(NavBar)