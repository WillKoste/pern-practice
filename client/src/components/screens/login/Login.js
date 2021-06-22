import React, {useState} from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onSubmit = e => {
    e.preventDefault()

    alert(`Email: ${email}, Password: ${password}`)
    setFormData({email: '', password: ''})
  }
  
  return (
    <form className="form p-3 bg-secondary" onSubmit={onSubmit}>
      <div className="form-group pb-2">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" className="form-control" value={email} onChange={onChange} />
      </div>
      <div className="form-group pb-2">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" className="form-control" value={password} onChange={onChange} />
      </div>
      <input type="submit" value="Login" className="btn btn-light" />
    </form>
  )
}

export default Login
