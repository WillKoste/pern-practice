import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/users';

const Navbar = ({logoutUser, usersRed: {isAuthenticated, loading, user}}) => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container'>
				<Link to='/' className='navbar-brand'>
					<h2>E-Store</h2>
				</Link>
				<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<NavLink className='nav-link' activeClassName='active' to='/cart'>
								<i className='fas fa-shopping-cart'></i> Cart
							</NavLink>
						</li>
						{isAuthenticated && !loading ? (
							<Fragment>
								<li className='nav-item'>
									<NavLink className='nav-link' to='/login' activeClassName='active' onClick={() => logoutUser()}>
										Logout
									</NavLink>
								</li>
							</Fragment>
						) : (
							<Fragment>
								<li className='nav-item'>
									<NavLink className='nav-link' activeClassName='active' to='/login'>
										Login
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink className='nav-link' activeClassName='active' to='/register'>
										Register
									</NavLink>
								</li>
							</Fragment>
						)}
						{isAuthenticated && user.is_admin && (
							<li className='nav-item'>
								<NavLink className='nav-link text-danger' activeClassName='active' to='/admin'>
									Admin Dashboard
								</NavLink>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	usersRed: PropTypes.object.isRequired,
	logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	usersRed: state.usersRed
});

export default connect(mapStateToProps, {logoutUser})(Navbar);
