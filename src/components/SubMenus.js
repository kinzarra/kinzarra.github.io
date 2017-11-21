import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import main from '../styles/Main';

export default class SubMenus extends Component {

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
            <span >
                    <Dropdown item text='Другое' compact>
                        <Dropdown.Menu>
                            {this.props.menus.map(
                                (item, index) => (
                                    <Dropdown.Item>{item.title}</Dropdown.Item>
                                )
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
            </span>
        )
    }
}