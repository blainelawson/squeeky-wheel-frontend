import React from 'react'
import faker from 'faker'
import {Card, Image, Icon} from 'semantic-ui-react'

export default class IssueCard extends React.Component {

    render() {
        return (
                <Card>
                    <Image src={faker.image.image()} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>
                            {this.props.name}
                        </Card.Header>
                        <Card.Meta>
                            {this.props.date}
                        </Card.Meta>
                        <Card.Description>
                            {this.props.desc}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                            <Icon name="user" />
                            542 Users following this issue
                    </Card.Content>
                </Card>
        )
    }
}
