import React from 'react';
import { Sidebar, Segment, Menu, Divider } from 'semantic-ui-react';
import styles from './stylesheets.module.scss';
import './stylesheets.scss';

export default function SideBar(props) {
    return (
        <Sidebar.Pushable as={Segment} attached>
            <Sidebar as={Menu} animation='overlay' vertical visible>
                <Menu.Item as='a'>
                    Inventory Viewer
                </Menu.Item>
                <Menu.Item as='a'>
                    Item Shop
                </Menu.Item>
                <Menu.Item as='a'>
                    Ranking System
                </Menu.Item>
                <Menu.Item as='a'>
                    Premium Packs
                </Menu.Item>
                <Menu.Item as='a'>
                    Trading Items
                </Menu.Item>
                <Menu.Item as='a'>
                    Chats
                </Menu.Item>
                <Menu.Item as='a'>
                    Bans
                </Menu.Item>
                <Menu.Item as='a'>
                    Inventory Inspection
                </Menu.Item>
                <Menu.Item as='a'>
                    Maintainences
                </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
                <div>

                </div>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
}
