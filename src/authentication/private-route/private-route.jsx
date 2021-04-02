import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

export function PrivateRoute({children, ...rest}) {
    const userId = useSelector(state => state.authentication.userId);
    const isAuthentication = !!userId

    let content = children;
    if (!isAuthentication) {
        content = <Redirect to='/login' />
    }

    return (
        <Route>
            {content}
        </Route>
    );
};

export default PrivateRoute;
