import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Divider} from 'semantic-ui-react';
import main from '../styles/Main';

export default class Tools extends Component {
  render() {
    return (
        <Modal trigger={<Button>Ваши инструменты</Button>} basic size='massive'>
            <Modal.Content align="center">
                <Divider horizontal inverted>Ваши инструменты</Divider>
                <Button.Group vertical labeled icon widths='1'>
                    <Button content='Заявки CORE' icon='plug' labelPosition='left' />
                    <Button content='Переговорные' icon='map' labelPosition='right' />
                    <Button content='IT' icon='usb' labelPosition='left' />
                    <Button content='Доступ к RDS' icon='database' labelPosition='right' />
                    <Button content='Адресная книга' icon='call' labelPosition='left' />
                    <Button content='Мое развитие' icon='child' labelPosition='right' />
                    <Button content='Новые сотрудники' icon='add user' labelPosition='right' />
                </Button.Group>
                <Divider horizontal inverted>Или можете</Divider>
                <Button.Group vertical labeled icon widths='1'>
                    <Button content='Добавить ' icon='child' labelPosition='right' />
                </Button.Group>

            </Modal.Content>

  </Modal>
    );
  }
}