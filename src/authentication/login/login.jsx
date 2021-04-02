import React from 'react';
import styles from './login.module.scss';

export const Login = (props) => {
    return <div>
        <div className={styles.signInForm}>
            <h2>Sign in</h2>
            <div className={styles.inputField}>
                <i className='fas fa-user'></i>
                <input type='text' placeholder='Username' />
            </div>
            <div className={styles.inputField}>
                <i className='fas fa-lock'></i>
                <input type='password' placeholder='Password' />
            </div>
            <input type='submit' value='Login' className='btn solid' />

            <div className={styles.panel}></div>
        </div>
    </div>
};

export default Login;
