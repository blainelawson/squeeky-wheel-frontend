import React from 'react';
import IssuesContainer from './IssuesContainer'
import CartContainer from './CartContainer'

export default class IssueSelectionContainer extends React.Component {

    render(){
        return (
            <div className="ui segment" style={{
                backgroundColor: "#29316A"
            }}>
                <div className="ui two column very relaxed grid" style={{
                    backgroundColor: "#29316A"
                }}>
                    <div className="column"
                            style={{
                                backgroundColor: '#29316A'
                        }}>
                        <IssuesContainer 
                            style={{
                                backgroundColor: '#29316A'
                        }}/>
                    </div>
                    <div 
                        className="column"
                        style={{
                            backgroundColor: '#29316A'
                        }}>
                        <CartContainer 
                            style={{
                                backgroundColor: '#29316A'
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