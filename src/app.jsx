import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './ui/login/login.jsx';
import Register from './ui/register/register.jsx';
import Main from './ui/main/main.jsx';
import LandingPage from './ui/landing-page/landing-page.jsx';
import * as authenticationThunks from './stores/authentication/thunks.js';
import 'semantic-ui-css/semantic.min.css';
import './stylesheet.scss';

export const App = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authenticationThunks.restoreAuthentication());
    }, []);

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/register'>
                    <Register />
                </Route>
                <Route path='/main'>
                    <Main />
                </Route>
                <Route path='/'>
                    <LandingPage />
                </Route>
            </Switch>

        </BrowserRouter>
    );
};

export default App;
