import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar, Segment, Menu, Divider } from 'semantic-ui-react';
import styles from './stylesheets.module.scss';
import './stylesheets.scss';

export default function SideBar(props) {
    return (
        <Menu vertical attached className={styles.sidebarMenu}>
            {props.children}
        </Menu>
    );
}

SideBar.Menu = function (props) {
    const content = React.Children.map(props.children, (item, index) => {
        // CSS class 'item': Semantic UI menu item
        return React.cloneElement(item, { className: (item.props.className ?? '') + 'item' });
    });

    return content;
};
