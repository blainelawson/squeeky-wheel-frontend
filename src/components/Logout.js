import React from 'react'
import {connect} from 'react-redux'
import { logout } from "../actions/currentUser"
import '../App.css'
import {Redirect} from 'react-router-dom'

const Logout = ({ logout }) => {

    return(
        <li className="logout">
            <a href="/logout" onClick={logout}>Log Out</a>
            <Redirect to={'/'} />
        </li>

    )
}



export default connect(null, { logout })(Logout)