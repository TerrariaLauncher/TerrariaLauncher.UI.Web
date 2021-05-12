import React from 'react';
import { Menu, Button, Dropdown } from 'semantic-ui-react';

export default function TopBar(props) {
    return (
        <Menu size='massive' attached>
            <Menu.Item>
                Trading System
            </Menu.Item>
            <Dropdown item text='Terraria Servers'>
                <Dropdown.Menu>
                    <Dropdown.Item>TShockDebug</Dropdown.Item>
                    <Dropdown.Item>Public Server 01</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text='Characters'>
                <Dropdown.Menu>
                    <Dropdown.Item>Launcher</Dropdown.Item>
                    <Dropdown.Item>Another Character</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Button primary>Login</Button>
                </Menu.Item>
                <Dropdown item text='Language'>
                    <Dropdown.Menu>
                        <Dropdown.Item>English</Dropdown.Item>
                        <Dropdown.Item>Tiếng Việt</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
    );
}
