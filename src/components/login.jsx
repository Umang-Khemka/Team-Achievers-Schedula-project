import React from 'react'
import './login.css'
import googlelogo from '../assets/google-icon.svg'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='logo'>
        <img src='https://images.unsplash.com/photo-1750535135593-3a8e5def331d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydG9vbiUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700' alt='logo' />
      </div>

      <form className='login-form'>
        <h2>Login</h2>

      <label htmlFor='email'>Mobile/Email</label>
      <br/>
      <input type='text' name='email' id='email' placeholder='login with mobile or email'/>
      <br/>

      <div className='form-options'>
      <div className='remember'>
        <input type='checkbox' id='remember' />
        <label htmlFor='remember'>Remeber Me</label>
      </div>
      <a href='#' className='forgot-link'>Forget Password?</a>
      </div>

      <br/>
      <button className='login-btn'>Login</button>
      <br/>
      <div className='divider'>Or login With</div>
      <br/>
      <button className='google-btn'>
      <img src={googlelogo} alt='google logo'/>
      Continue with google</button>

      <p className='signup-text'>Don't have an account? <a href='#'>Sign Up</a></p>
      </form>
    </div>
  )
}

export default Login;
