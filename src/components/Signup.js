// import React from 'react'
// import {connect} from 'react-redux'
// import {updateSignupForm} from "../actions/updateSignupForm"
// import {signup} from "../actions/currentUser"

// export default class Signup extends React.Component {

//     handleInputChange = event => {
//         const {name, value} = event.target
//         const updatedFormInfo = {
//             ...signupFormData,
//             [name]: value
//         }

//         updateSignupForm(updatedFormInfo)
//     }

//     handleSubmit = event => {
//         event.preventDefault()
//         signup(signupFormData)
//     }


//     render(){
//         return(
//             <div style={{
//                 position: "relative",
//                 top: "50px",
//                 backgroundColor: "red"
                
//             }}>
//                 <h1>SignupComponent</h1>
//             </div>
//         )
//     }
// }

// export default connect()(Signup)