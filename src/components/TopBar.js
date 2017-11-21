import React, { Component } from 'react';
import { Icon, Header, Image, Grid, Segment, Label, Container} from 'semantic-ui-react';
import styles from '../styles/Main';

export default class TopBar extends Component {
    render() {
        return (
            <Segment raised>
                <Label as='a' color='red' ribbon>Важное</Label>
                <Grid centered columns={2}>
                    {this.props.data.map(
                        (item, index) => (
                            <Grid.Column mobile={32} tablet={16} computer={4}>
                                <div style = {styles.toppanel.main}>
                                    <Image size='small' src={require('../images/' + item.src)} />
                                    <Header as='h6'>{item.title}</Header>
                                </div>
                                <a><Icon name='like outline' /></a>
                                {item.likes}
                            </Grid.Column>
                        )
                    )}
                </Grid>
            </Segment>
        )
    }
}