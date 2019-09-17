// import React from 'react'
// import {connect} from 'react-redux'
// import {updateSignupForm} from "../actions/updateSignupForm"
// import {signup} from "../actions/currentUser"

// const Signup = ({ signupFormData, updateSignupForm, signup }) => {

//     const handleInputChange = event => {
//         const {name, value} = event.target
//         const updatedFormInfo = {
//             ...signupFormData,
//             [name]: value
//         }

//         updateSignupForm(updatedFormInfo)
//     }

//     const handleSubmit = event => {
//         event.preventDefault()
//         signup(signupFormData)
//     }


//         return(
//             <div style={{
//                 position: "relative",
//                 top: "50px"              
//             }}>
//                 <form onSubmit={this.handleSubmit}>
//                     Name: <input type="text" value={signupFormData.name} onChange={handleInputChange} name="name" placeholder="First and Last Name" />
//                     Username: <input type="text" value={signupFormData.username} onChange={handleInputChange} name="username" placeholder="username" />
//                     Zipcode: <input type="text" value={signupFormData.zipcode} onChange={handleInputChange} placeholder="e.g. 63701" />
//                     Password: <input type="password" value={signupFormData.password} onChange={handleInputChange} name="password" />
//                     <input type="submit" value="Create User" />
//                 </form>
//             </div>
//         )
// }
    
// const mapStateToProps = state => {
//     return {
//         signupFormData: state.signupForm
//     }
// }


// export default connect(mapStateToProps, {updateSignupForm, signup})(Signup)