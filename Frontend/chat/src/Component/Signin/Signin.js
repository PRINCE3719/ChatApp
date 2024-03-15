import React from 'react'
import "../CSS/Login.css"
import { Link } from "react-router-dom"

const Signin = () => {
    return (
        <div className='login'>
            <div className='login-page'>
                <div className='login-1'>
                    <h3>Welcome back</h3>
                    <p>Don't have an account?<Link to='/signup' style={{ textDecoration: "none" }}>Signup</Link></p>
                </div>
                <div className='login-2'>
                <h4>Login</h4>
                    <div className='login-form'>
                        <form>
                        <div className='input-div'>
                            <label>username</label>
                          <input type='email' id='email' name='email' autoComplete='off'/>
                          </div> 
                          <div className='input-div'>
                            <label>password</label>
                          <input type='password' id='pass' name='pass'/>
                          </div>
                            <button id='signin-butn'>Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin