import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../../actions/users';
import {Redirect} from 'react-router-dom';

const Login = ({login, usersRed: {user, loading, isAuthenticated}}) => {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const {email, password} = formData;

	const onChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (email === '' || password === '') {
			alert('Please fill out all fields');
		} else {
			setFormData({email: '', password: ''});
			login(formData);
		}
	};

	if (isAuthenticated) {
		return <Redirect />;
	}

	return (
		<div>
			<h2 className='mb-3'>Login</h2>
			<form className='form p-4 bg-secondary' onSubmit={onSubmit}>
				<div className='form-group pb-2'>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' className='form-control' value={email} onChange={onChange} required />
				</div>
				<div className='form-group pb-2'>
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' className='form-control' value={password} onChange={onChange} minLength={6} required />
				</div>
				<input type='submit' value='Login' className='btn btn-light' />
			</form>
		</div>
	);
};

Login.propTypes = {
	usersRed: PropTypes.object.isRequired,
	login: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	usersRed: state.usersRed
});

export default connect(mapStateToProps, {login})(Login);
