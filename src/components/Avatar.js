import React, { Component } from 'react';
import { Dropdown, Image } from 'semantic-ui-react';
import styles from '../styles/Main';

export default class TopBar extends Component {
    render() {
        return (
            <div style={styles.search.avatar}>
                <Image src={require('../images/avatar.jpg')}  avatar />
                <span >
                    <Dropdown item text='Шайжанов Филипп'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Моя страница</Dropdown.Item>
                            <Dropdown.Item>Мое развитие</Dropdown.Item>
                            <Dropdown.Item>Мои заявки</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </span>

            </div>
        )
    }
}


