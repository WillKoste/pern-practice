import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/users';
import Logo from '../../images/Logo.svg';

const Navbar = ({logoutUser, usersRed: {isAuthenticated, loading, user}}) => {
	return (
		<nav className='navbar navbar-expand-lg bg-primary'>
			<div className='container'>
				<Link to='/' className='navbar-brand'>
					<img src={Logo} alt='Estore logo' />
				</Link>
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
