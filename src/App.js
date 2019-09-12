import React from 'react';
import IssuesContainer from './containers/IssuesContainer';
import IssuesSelectionContainer from './containers/IssueSelectionContainer'
import './App.css';
import Login from './components/Login'
import Logout from './components/Logout'
import {connect} from 'react-redux'
import { getCurrentUser } from './actions/currentUser'

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    return (
        this.props.currentUser ? <Logout /> : <Login />
    );
  }
}

// we can do the following because we know the incoming argument is 
//  and object, state, coming from redux and it has a property called
//  currentUser
//  state = { ...,
//            currentUser: {...}
// }

const mapStateToProps = ({ currentUser }) => {
  return {
      currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
