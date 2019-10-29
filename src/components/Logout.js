import React from 'react'
import {connect} from 'react-redux'
import { logout } from "../actions/currentUser"
// import '../App.css'

import { Button } from 'semantic-ui-react'

const Logout = ({ logout}) => {
    return(
            <li className="login">
                <a href="/"><Button onClick={logout}>Log Out</Button></a>
            </li>
    )
}



export default connect(null, { logout })(Logout)