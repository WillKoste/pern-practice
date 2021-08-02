import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {magenta} from 'colors';

const AdminRoute = ({component: Component, usersRed: {isAuthenticated, loading, user}, ...rest}) => {
	return <Route {...rest} render={(props) => (isAuthenticated && !loading && user.is_admin ? <Component {...props} /> : <Redirect to='/' />)} />;
};

const mapStateToProps = (state) => ({
	usersRed: state.usersRed
});

export default connect(mapStateToProps)(AdminRoute);
