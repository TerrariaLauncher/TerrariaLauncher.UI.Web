import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import PlayerInspection from '../../player-inspection/player-inspection';
import SideBar from '../side-bar/side-bar';
import TopBar from '../top-bar/top-bar';
import styles from './stylesheets.module.scss';
import * as instanceThunks from '../../instances/thunks.js';
import { useMemo } from 'react';
import * as tradingActions from '../../trading/actions.js';
import * as tradingThunks from '../../trading/thunks.js';

function InstanceDropdown(props) {
    const instanceId = useSelector(state => state.trading.instanceId);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(instanceThunks.getInstancesThunk());
    }, []);

    const { allIds: instanceIds, byId: instances } = useSelector(state => state.instances);
    const instanceOptions = useMemo(() => {
        const options = [];
        instanceIds.forEach(id => {
            const instance = instances[id];
            options.push({
                key: instance.id,
                text: instance.name,
                value: instance.id
            });
        });
        return options;
    }, [instanceIds]);

    function handleDropdownChange(sender, data) {
        dispatch(tradingActions.selectInstance({
            instanceId: data.value
        }));
        dispatch(tradingThunks.getRegisteredInstanceUsersThunk({
            instanceId: data.value,
            userId: 1
        }));
    }

    return (
        <Dropdown
            item
            placeholder='Please choose an Instance'
            options={instanceOptions}
            search
            value={instanceId}
            onChange={handleDropdownChange}
        />
    );
}

function CharacterDropdown(props) {
    const instanceUserId = useSelector(state => state.trading.instanceUserId);
    const { byId, allIds } = useSelector(state => state.trading.registeredInstanceUsers);
    const dropdownOptions = useMemo(() => allIds.map(id => ({
        key: byId[id].id,
        text: byId[id].name,
        value: byId[id].id
    })), [allIds]);

    const dispatch = useDispatch();

    function handleDropdownChange(sender, data) {
        dispatch(tradingActions.selectInstanceUser({
            instanceUserId: data.value
        }));
    }

    return (
        <Dropdown
            item
            placeholder='Please choose a Character'
            options={dropdownOptions}
            search
            value={instanceUserId}
            onChange={handleDropdownChange}
        />
    );
}

export default function MainLayout(props) {
    return (
        <BrowserRouter>
            <div className={styles.mainLayout}>
                <div className={styles.topBarWrapper}>
                    <TopBar>
                        <Menu.Item>
                            Trading System
                        </Menu.Item>
                        <InstanceDropdown />
                        <CharacterDropdown />
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Button primary>Login</Button>
                            </Menu.Item>
                            {/* <Dropdown item text='Language'>
                                <Dropdown.Menu>
                                    <Dropdown.Item>English</Dropdown.Item>
                                    <Dropdown.Item>Tiếng Việt</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}
                        </Menu.Menu>
                    </TopBar>
                </div>
                <div className={styles.sideBarWrapper}>
                    <SideBar>
                        <SideBar.Menu>
                            <NavLink to='/manual'>
                                Manual
                            </NavLink>
                            <NavLink to='/characters'>
                                Characters
                            </NavLink>
                            <NavLink to='/shopping'>
                                Item Shop
                            </NavLink>
                            <NavLink to='/ranking-system'>
                                Ranking System
                            </NavLink>
                            <NavLink to='/premium-packs'>
                                Premium Packs
                            </NavLink>
                            <NavLink to='/trading'>
                                Trading Items
                            </NavLink>
                            <NavLink to='/statistics'>
                                Statistics
                            </NavLink>
                            <NavLink to='/chats'>
                                Chats
                            </NavLink>
                            <NavLink to='/player-inspection'>
                                Player Inspection
                            </NavLink>
                            <NavLink to='/bans'>
                                Bans
                            </NavLink>
                            <NavLink to='/anti-cheat'>
                                Anti-Cheat System
                            </NavLink>
                            <NavLink to='/maintainences'>
                                Maintainences
                            </NavLink>
                        </SideBar.Menu>
                    </SideBar>
                </div>
                <div className={styles.contentWrapper}>
                    <Switch>
                        <Route path='/player-inspection'>
                            <PlayerInspection />
                        </Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}
