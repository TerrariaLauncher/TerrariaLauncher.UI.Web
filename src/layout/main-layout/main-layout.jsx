import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import PlayerInspection from '../../player-inspection/player-inspection';
import SideBar from '../side-bar/side-bar';
import TopBar from '../top-bar/top-bar';
import styles from './stylesheets.module.scss';

export default function MainLayout(props) {
    return (
        <BrowserRouter>
            <div className={styles.mainLayout}>
                <div className={styles.topBarWrapper}>
                    <TopBar />
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
