import React from 'react';
import SideBar from '../side-bar/side-bar';
import TopBar from '../top-bar/top-bar';
import styles from './stylesheets.module.scss';

export default function MainLayout(props) {
    return (
        <div className={styles.mainLayout}>
            <div className={styles.topBarWrapper}>
                <TopBar />
            </div>
            <div className={styles.contentWrapper}>
                <SideBar />
            </div>
            <div className={styles.footerWrapper}>
                truongchauhien@gmail.com
            </div>
        </div>
    );
}
