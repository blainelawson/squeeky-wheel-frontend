import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import issueReducer from './reducers/issueReducer'
import usersReducer from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm  from './reducers/signupFormReducer'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import NavBar from './components/NavBar'
import  About from './components/About'
import Contact from './components/Contact'
import MainContainer from './containers/MainContainer'
import Signup from './components/Signup'


const reducer = combineReducers({
    users: usersReducer,
    currentUser,
    issueReducer,
    loginForm,
    signupForm
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <React.Fragment>
                <NavBar />
                <Route path="/" component={MainContainer} />
                <Route path="/about" component={About} state={store} />
                <Route path="/contact" component={Contact} />
                {/* <Route exact path="/signup" component={Signup} /> */}
            </React.Fragment>
        </Router>
    </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
