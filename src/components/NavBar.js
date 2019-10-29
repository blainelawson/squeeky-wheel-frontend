import React from 'react'
import { connect } from 'react-redux'

import Login from "./Login"
import Logout from "./Logout"

import { getCurrentUser } from '../actions/currentUser'

// import "../App.css"
// import "../assets/css/bootstrap.min.css"

class NavBar extends React.Component {
    componentDidMount(){
        this.props.getCurrentUser()
    }

    render(){
        return (
            <div className="jss529" id="navbar">
                <ul className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-positionFixed jss9 jss22 MuiAppBar-colorPrimary mui-fixed">
                    <li className="navbar">
                        <a href="/">Home</a>
                    </li>
                    <li className="navbar">
                        <a href="/about">About</a>
                    </li>
                    <li className="navbar">
                        <a href="/contact">Contact</a>
                    </li>
                        {this.props.currentUser ? <Logout /> : <Login />}

                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps, {getCurrentUser})(NavBar)