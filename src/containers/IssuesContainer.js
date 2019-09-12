import React from 'react'
import {connect} from 'react-redux'
import {fetchIssues} from '../actions/fetchIssues'
import Issues from '../components/Issues'
import IssueCard from '../components/IssueCard'

// import IssueInput from './components/IssueInput'
const issuesPerPage = 6

class IssuesContainer extends React.Component {
    state={
        totalIssues: 0,
        currentIssueSet: 1
    }

    componentDidMount(){
        console.log('issuescontainer did mount')
        this.props.fetchIssues()
    }
    
    render() {
        return (
        <div 
            className="ui link cards"
            style={{
                backgroundColor: 'red'
            }}>
            {this.props.issues.map(issue => {

                return <div className="card"><IssueCard name={issue.name} desc={issue.desc} date={issue.date} /></div>
            })}
        </div>
        )
    }
}

const mapStateToProps = (state) => {debugger
    return {
        issues: state.issueReducer.issues
    }
}

export default connect(mapStateToProps, {fetchIssues})(IssuesContainer)