import { useState } from 'react'
import './App.css'
import React from 'react'

const App = () => {
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
        <label>
        <input type='checkbox' id='remember' name='remember'/>Remember Me
      </label>
      <a href='#'>Forget Password?</a>
      </div>

      <br/>
      <button className='login-btn'>Login</button>
      <br/>
      <div className='divider'>Or login With</div>
      <br/>
      <button className='google-btn'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='google logo'/>
      Continue with google</button>

      <p className='signup-text'>Don't have an account?<a href='#'>Sign Up</a></p>
      </form>
    </div>
  )
}
export default App
