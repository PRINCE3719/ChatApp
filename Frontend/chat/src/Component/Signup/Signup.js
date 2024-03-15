import React from 'react'
import { Link } from "react-router-dom"
import "../CSS/Signup.css"

const Signup = () => {
  return (
    <div className='login'>
      <div className='login-page'>
        <div className='login-3'>
          <div className='signup-page'>
          <h3>Welcome</h3>
          <h3>Join us</h3>
          <p>Already have an account?<Link to='/' style={{ textDecoration: "none" }}>Signin</Link></p>
          </div>
          
        </div>
        <div className='login-4'>
          <h3>Sign Up</h3>
          <div className='signup-sec'>
            <form id='form-sec'>
              <div className='input-div'>
                <label>Name</label>
                <input type='text' id='name' name='name' autoComplete='off' />
              </div>
              <div className='input-div'>
                <label>username</label>
                <input type='email' id='email' name='email' autoComplete='off' />
              </div>
              <div className='input-div'>
                <label>password</label>
                <input type='password' id='pass' name='pass' />
              </div>
              <label>Gender</label>
                <div className='checkbox-div'>
                <div className='radio-div'>
                  <input type='checkbox' id='checkbox' value="male" name='male' />
                  <label>Male</label>
                </div>
                <div className='radio-div'>
                  <input type='checkbox' id='checkbox' value="female" name='female' />
                  <label>Female</label>
                </div>
                </div>
                
            
              <button id='signin-butn'>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup