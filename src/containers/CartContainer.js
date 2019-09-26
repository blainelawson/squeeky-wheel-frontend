import React from 'react'
import {connect} from 'react-redux'
import {fetchUserIssues} from '../actions/fetchIssues'
import IssueCard from '../components/IssueCard'
import { deleteUserIssues } from '../actions/cartActions'

const issuesPerPage = 6

class CartContainer extends React.Component {
    state={
        totalIssues: 0,
        currentIssueSet: 1
    }

    componentDidMount(){
        this.props.fetchUserIssues(this.props.currentUser)
    }

    clickHandler = (event) => {
        this.props.deleteUserIssues({issueId: event.currentTarget.id}, this.props.currentUser)
    }
    
    render() {
        return (
        <div className="ui link cards"
        style={{
            backgroundColor: '#29316A'
        }}>
            {this.props.userIssues.map(issue => {

                return <div className="card" id={issue.id} key={issue.id} ><IssueCard name={issue.name} desc={issue.desc} date={issue.date} /></div>
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

export default connect(mapStateToProps, {fetchUserIssues, deleteUserIssues})(CartContainer)