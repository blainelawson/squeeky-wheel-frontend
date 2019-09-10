import React from 'react'
import {connect} from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from "../actions/currentUser"

const Login = ({ loginFormData, updateLoginForm }) => {
    const handleInputChange = event => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }

        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log('here in handleSubmit')
        console.log('form data', loginFormData)
        login(loginFormData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={loginFormData.username} onChange={handleInputChange} placeholder="username" />
            <input type="text" name="password" value={loginFormData.password} onChange={handleInputChange} placeholder="password" />
            <input type="submit" value="Log In" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login)