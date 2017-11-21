import React, { Component } from 'react';
import { Menu, Segment, Icon } from 'semantic-ui-react';
import styles from '../styles/Main';

export default class Filters extends Component {
    state = { activeItem: 'Новости' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (

        <Segment raised style = {styles.rightpanel.main}>
            <Icon disabled name='filter' />
            Фильтры
          <Menu pointing vertical>
              {this.props.filters.map(
                        (item, index) => (
                            <Menu.Item name={item.title} active={activeItem === item.title} onClick={this.handleItemClick} />
                      )
                )}
          </Menu>
        </Segment>
        )
    }
}
