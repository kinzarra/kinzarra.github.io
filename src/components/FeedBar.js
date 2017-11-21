import React, { Component } from 'react';
import { Item, Segment, Label, Icon } from 'semantic-ui-react';

export default class FeedBar extends Component {
    render() {
        return (
            <div>
                {this.props.feeds.map(
                    (item, index) => (
                        <Segment raised>
                            <Item.Group divided>
                                <Item>
                                  <Item.Image size='tiny' src = {require('../images/' + item.src)} />
                                    <Item.Content>
                                        <Item.Header as='a'>{item.header}</Item.Header>
                                        <Item.Meta>
                                          <span className='price'>{item.author}</span>
                                          <span className='stay'>{item.days}</span>
                                        </Item.Meta>
                                        <Item.Description>{item.descr}</Item.Description>
                                        <Item.Extra>
                                            <Label>{item.type}</Label>
                                            <a><Icon name='like outline' /></a>
                                            {item.likes}
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Segment>
                    )
                )}
            </div>
        )
    }
}

