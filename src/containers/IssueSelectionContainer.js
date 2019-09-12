import React from 'react';
import IssuesContainer from './IssuesContainer'
import CartContainer from './CartContainer'

export default class IssueSelectionContainer extends React.Component {

    render(){
        return (
            <div className="ui segment">
                <div className="ui two column very relaxed grid">
                    <div className="column"
                            style={{
                                backgroundColor: 'red'
                        }}>
                        <IssuesContainer 
                            style={{
                                backgroundColor: 'red'
                        }}/>
                    </div>
                    <div 
                        className="column"
                        style={{
                            backgroundColor: 'red'
                        }}>
                        <CartContainer 
                            style={{
                                backgroundColor: 'red'
                        }}/>
                    </div>
                </div>
                <div className="ui vertical divider">
                    -->
                </div>
            </div>
        )
    }
}