// import React from 'react'
// import {connect} from 'react-redux'
// import { updateLoginForm } from '../actions/loginForm'
// import { login } from "../actions/currentUser"
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Signup from './Signup'

// const Login = ({ loginFormData, updateLoginForm, login }) => {
//     const handleInputChange = event => {
//         const {name, value} = event.target
//         const updatedFormInfo = {
//             ...loginFormData,
//             [name]: value
//         }

//         updateLoginForm(updatedFormInfo)
//     }

//     const handleSubmit = event => {
//         event.preventDefault()

//         login(loginFormData)
//     }

//     return(
//         <li className="login">
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="username" value={loginFormData.username} onChange={handleInputChange} placeholder="username" />
//                 <input type="text" name="password" value={loginFormData.password} onChange={handleInputChange} placeholder="password" />
//                 <input type="submit" value="Log In" />
//             </form>
//             <li className="login">
//                 <a href="/signup">Or Sign-up</a>
//             </li>
//         </li>

//     )
// }

// const mapStateToProps = state => {
//     return {
//         loginFormData: state.loginForm
//     }
// }

// export default connect(mapStateToProps, {updateLoginForm, login})(Login)