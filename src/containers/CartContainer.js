import React from 'react'
import {connect} from 'react-redux'
import {fetchUserIssues} from '../actions/fetchIssues'
import Issues from '../components/Issues'
import IssueCard from '../components/IssueCard'

// import IssueInput from './components/IssueInput'
const issuesPerPage = 6

class CartContainer extends React.Component {
    state={
        totalIssues: 0,
        currentIssueSet: 1
    }

    componentDidMount(){
        this.props.fetchUserIssues(this.props.currentUser)
    }
    
    render() {
        return (
        <div className="ui link cards"
        style={{
            backgroundColor: 'red'
        }}>
            {this.props.userIssues.map(issue => {

                return <div className="card"><IssueCard name={issue.name} desc={issue.desc} date={issue.date} /></div>
            })}
        </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        currentUser: state.currentUser,
        userIssues: state.issueReducer.userIssues
    }
}

export default connect(mapStateToProps, {fetchUserIssues})(CartContainer)