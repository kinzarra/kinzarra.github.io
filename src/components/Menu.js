import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import main from '../styles/Main';

export default class Tools extends Component {
    constructor(props) {

      super(props);
      this.state = {
        activeItem: props.defaultMenu
      };
      this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick (e, item) {
        this.setState( { activeItem: item.name })
    }

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Menu secondary vertical menu size = 'small'>
                    {this.props.menus.map(
                        (item, index) => (
                            <Menu.Item active={activeItem === item.id} name={item.id} onClick={this.handleItemClick}>
                                <Icon name={item.icon} />
                                {item.title}
                            </Menu.Item>
                    )
                )}
                </Menu>
            </div>

        )
    }
}