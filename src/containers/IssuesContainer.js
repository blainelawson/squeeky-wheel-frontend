import React from 'react'
import {connect} from 'react-redux'
import {fetchIssues} from '../actions/fetchIssues'
import { addUserIssues } from '../actions/cartActions'
import IssueCard from '../components/IssueCard'

// import Draggable from './DraggableContainer'

// import IssueInput from './components/IssueInput'
// const issuesPerPage = 6

class IssuesContainer extends React.Component {
    state={
        totalIssues: 0,
        currentIssueSet: 1
    }

    componentDidMount(){
        this.props.fetchIssues()
    }

    clickHandler = (event) => {
        this.props.addUserIssues({issueId: event.currentTarget.id}, this.props.currentUser)
    }
    
    render() {
        return (
        <div 
            className="ui link cards"
            style={{
                backgroundColor: '#29316A'
            }}>
                {this.props.issues.map(issue => {

                    return <div className="card" id={issue.id} key={issue.id} onClick={this.clickHandler}><IssueCard name={issue.name} desc={issue.desc} date={issue.date} /></div>
                })}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issueReducer.issues,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {fetchIssues, addUserIssues})(IssuesContainer)