import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import styles from './stylesheets.module.scss';

export function LandingPage(props) {
    return (
        <div className={styles.container}>
            <Link to='/main'>
                <Button color='red'>Trading System</Button>
            </Link>
            <Link to='/readme'>
                <Button>Readme</Button>
            </Link>
        </div>
    );
}

export default LandingPage;
