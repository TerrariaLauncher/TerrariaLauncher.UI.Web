import React from 'react';
import { Menu, Button, Dropdown } from 'semantic-ui-react';

export default function TopBar(props) {
    return (
        <Menu size='massive' attached>
            <Menu.Item>
                Trading System
                </Menu.Item>
            <Menu.Menu position='right'>
                <Dropdown item text='Language'>
                    <Dropdown.Menu>
                        <Dropdown.Item>English</Dropdown.Item>
                        <Dropdown.Item>Tiếng Việt</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>
                    <Button primary>Login</Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}
