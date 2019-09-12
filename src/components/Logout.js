import React from 'react'
import {connect} from 'react-redux'
import { logout } from "../actions/currentUser"
import '../App.css'

const Logout = ({ logout }) => {

    return(
        <li class="navbar">
            <a href="#" onClick={logout}>Log Out</a>
        </li>
    )
}



export default connect(null, { logout })(Logout)