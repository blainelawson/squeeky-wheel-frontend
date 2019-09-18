import React from 'react'
import {connect} from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from "../actions/currentUser"
import { withRouter } from 'react-router'

class Login extends React.Component {
    handleInputChange = event => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...this.props.loginFormData,
            [name]: value
        }
        this.props.updateLoginForm(updatedFormInfo)
    }

    handleSubmit = event => {
        event.preventDefault()
        
        this.props.login(this.props.loginFormData, this.props.history)
    }

    render(){
        return (
            <li className="login">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" value={this.props.loginFormData.username} onChange={event => this.handleInputChange(event)} placeholder="username" />
                    <input type="text" name="password" value={this.props.loginFormData.password} onChange={event => this.handleInputChange(event)} placeholder="password" />
                    <input type="submit" value="Log In" />
                </form>
                <li className="login">
                    <a href="/signup">Or Sign-up</a>
                </li>
            </li>
        )
    }   
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm,
    }
}

export default connect(mapStateToProps, {updateLoginForm, login})(withRouter(Login))