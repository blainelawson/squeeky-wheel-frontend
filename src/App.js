import React from 'react';
import IssuesContainer from './containers/IssuesContainer';
import IssuesSelectionContainer from './containers/IssueSelectionContainer'
import './App.css';
import Login from './components/Login'

function App() {
  return (
    <div>
      <Login />
        {/* <IssuesSelectionContainer /> */}
    </div>
  );
}

export default App;
