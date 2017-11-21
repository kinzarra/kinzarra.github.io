import React, { Component } from 'react';
import { Segment, Item, Icon } from 'semantic-ui-react';
import styles from '../styles/Main';

export default class BirthdayBox extends Component {
    render() {
        return (
            <div>
                <Segment raised style = {styles.rightpanel.main}>
                    <Icon disabled name='birthday' />
                    Именинники
                    <Item.Group relaxed>
                      {this.props.persons.map(
                        (item, index) => (
                            <Item>
                              <Item.Image size='mini' src={item.src} />

                              <Item.Content verticalAlign='middle'>
                                <Item.Description as='a'>{item.name}</Item.Description>
                              </Item.Content>
                            </Item>
                        )
                    )}
                    </Item.Group>
                </Segment>
            </div>
        )
    }
}
