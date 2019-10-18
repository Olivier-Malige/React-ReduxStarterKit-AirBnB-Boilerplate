import React from 'react'
import * as PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ isAuth, component: Component, path }) => (
    <Route
        exact
        path={path}
        render={() => (isAuth ? <Component /> : <Redirect to="/login" />)}
    />
);

export default AuthRoute;

AuthRoute.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object,
    ]).isRequired,
    isAuth: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
};
