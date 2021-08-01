import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, usersRed: {isAuthenticated, loading}, ...rest}) => {
	return <Route {...rest} render={(props) => (!isAuthenticated && loading ? <Redirect to='/login' /> : <Component {...props} />)} />;
};

PrivateRoute.propTypes = {
	usersRed: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	usersRed: state.usersRed
});

export default connect(mapStateToProps)(PrivateRoute);
