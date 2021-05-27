import React, { useMemo } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import SideBar from '../side-bar/side-bar';
import TopBar from '../top-bar/top-bar';
import PlayerInspection from '../../player-inspection/player-inspection';
import { Characters } from '../../characters/characters';
import * as instanceThunks from '../../../../stores/instances/thunks.js';
import * as tradingActions from '../../../../stores/trading/actions.js';
import * as registeredInstanceUserThunks from '../../../../stores/registered-instance-users/thunks.js';
import * as logoutThunks from '../../../../stores/authentication/logout/thunks.js';
import styles from './stylesheets.module.scss';

function InstanceDropdown(props) {
    const userId = useSelector(state => state.authentication.user.id);
    const instanceId = useSelector(state => state.tradingSystem.instanceId);
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
        dispatch(registeredInstanceUserThunks.getRegisteredInstanceUsersThunk({
            instanceId: data.value,
            userId: userId
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
    const instanceUserId = useSelector(state => state.tradingSystem.instanceUserId);
    const { byId, allIds } = useSelector(state => state.registeredInstanceUsers);
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

function UserDropdown(props) {
    const name = useSelector(state => state.authentication.user.name);
    const dispatch = useDispatch();

    return (
        <Dropdown item text={name}>
            <Dropdown.Menu>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(logoutThunks.logout())}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default function MainLayout(props) {
    const match = useRouteMatch();

    return (
        <div className={styles.mainLayout}>
            <div className={styles.topBarWrapper}>
                <TopBar>
                    <Menu.Item>
                        Trading System
                    </Menu.Item>
                    <InstanceDropdown />
                    <CharacterDropdown />
                    <Menu.Menu position='right'>
                        <UserDropdown />

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
                        <NavLink to={`${match.url}/characters`}>
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
                        <NavLink to={`${match.url}/player-inspection`}>
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
                    <Route path={`${match.path}/characters`}>
                        <Characters />
                    </Route>
                    <Route path={`${match.path}/player-inspection`}>
                        <PlayerInspection />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}
