import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Header, Input, Label } from 'semantic-ui-react';
import * as thunks from '../../stores/authentication/login/thunks.js';
import styles from './login.module.scss';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

export const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleUserNameInputChange(args) {
        setUserName(args.target.value);
    }

    function handlePasswordInputChange(args) {
        setPassword(args.target.value);
    }

    const dispatch = useDispatch();
    function handleLoginButtonClick() {
        dispatch(thunks.login({
            name: userName,
            password: password
        }));
    }

    const initialized = useSelector(state => state.authentication.initialized)
    const isAuthenticated = useSelector(state => state.authentication.user.id) !== null;

    if (!initialized) {
        return "Please wait ...";
    }

    if (isAuthenticated) {
        return (
            <Redirect to='/main' />
        );
    } else {
        return (
            <div className={styles.loginForm}>
                <Header as='h1'>Welcome back!</Header>
                <Form>
                    <Form.Field>
                        <label>User Name or Email:</label>
                        <input placeholder='Enter your user name or email ...'
                            value={userName}
                            onChange={handleUserNameInputChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password:</label>
                        <input placeholder='Enter your password ...'
                            type='password'
                            value={password}
                            onChange={handlePasswordInputChange}
                        />
                    </Form.Field>
                    <Button onClick={handleLoginButtonClick}>Login</Button>
                </Form>
            </div>
        );
    }
};

export default Login;
