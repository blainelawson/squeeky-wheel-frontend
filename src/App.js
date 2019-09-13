import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import './App.css';

import NavBar from './components/NavBar'
// import { about } from './components/About'

import MainContainer from './containers/MainContainer';

class App extends React.Component {

  render(){
    return (
      <div style={{
        backgroundColor: "#B6CCE1"
    }}>
        
        {/* <NavBar /> */}
        <MainContainer />
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

export default App
