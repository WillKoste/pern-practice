import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = () => {
	return <Route />;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(PrivateRoute);
