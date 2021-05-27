import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MainLayout from './layout/main-layout/main-layout.jsx';

export function Main(props) {
    const initialized = useSelector(state => state.authentication.initialized);
    const isAuthenticated = useSelector(state => state.authentication.user.id) != null;

    if (!initialized) {
        return "Please wait...";
    }

    if (isAuthenticated) {
        return (<MainLayout />)
    } else {
        return (<Redirect to='/login' />)
    }
}

export default Main;
