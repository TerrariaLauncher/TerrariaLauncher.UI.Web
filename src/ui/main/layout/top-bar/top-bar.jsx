import React from 'react';
import { Menu, Button, Dropdown } from 'semantic-ui-react';

export default function TopBar(props) {
    return (
        <Menu size='massive' attached>
            {props.children}
        </Menu>
    );
}
