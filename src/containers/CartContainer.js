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
        this.props.fetchUserIssues()
    }
    
    render() {
        return (
        <div className="ui link cards"
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

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps, {fetchUserIssues})(CartContainer)