import React, {useState} from 'react';

const Login = () => {
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
			alert(`Email: ${email}, Password: ${password}`);
			setFormData({email: '', password: ''});
		}
	};

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

export default Login;
