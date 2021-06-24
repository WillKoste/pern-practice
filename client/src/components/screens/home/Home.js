import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Products from './Products';

const Home = ({usersRed: {user}}) => {
	return (
		<div>
			<h1>Welcome!</h1>
			<Products />
		</div>
	);
};

Home.propTypes = {
	usersRed: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	usersRed: state.usersRed
});

export default connect(mapStateToProps, {})(Home);
