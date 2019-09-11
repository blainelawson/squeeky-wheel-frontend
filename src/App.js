import React from 'react';
import IssuesContainer from './containers/IssuesContainer';
import IssuesSelectionContainer from './containers/IssueSelectionContainer'
import './App.css';
import Login from './components/Login'
import {connect} from 'react-redux'
import { getCurrentUser } from './actions/currentUser'

class App extends React.Component {

  componentDidMount(){
    console.log('component mounted')
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div>
        <Login />
          {/* <IssuesSelectionContainer /> */}
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
