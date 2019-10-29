import React from 'react';
import IssuesSelectionContainer from './IssueSelectionContainer'
// import '../App.css';
import {connect} from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import Welcome from '../components/Welcome'

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div style={{
        backgroundColor: "#B6CCE1"
    }}>
      <div style={{
        position: "relative",
        top: "27px"
      }}>

        {this.props.currentUser ? <IssuesSelectionContainer /> : <Welcome />}
        </div>
      </div>
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
