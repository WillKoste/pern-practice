import React, {useState} from 'react';

const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

	const {name, email, password, password2} = formData;

	const onChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			alert('Passwords do not match, please try again');
			setFormData({...formData, password: '', password2: ''});
		} else {
			console.log(formData);
			setFormData({name: '', email: '', password: '', password2: ''});
		}
	};

	return (
		<div>
			<h2 className='mb-3'>Register</h2>
			<form className='form p-4 bg-secondary' onSubmit={onSubmit}>
				<div className='form-group pb-2'>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' className='form-control' value={name} onChange={onChange} required />
				</div>
				<div className='form-group pb-2'>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' className='form-control' value={email} onChange={onChange} required />
				</div>
				<div className='form-group pb-2'>
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' className='form-control' value={password} onChange={onChange} minLength={6} required />
				</div>
				<div className='form-group pb-2'>
					<label htmlFor='password2'>Confirm Password</label>
					<input type='password' name='password2' className='form-control' value={password2} onChange={onChange} minLength={6} required />
				</div>
				<input type='submit' value='Login' className='btn btn-light' />
			</form>
		</div>
	);
};

export default Register;
