import React, { useState } from 'react'
import "../CSS/Login.css"
import { Link } from "react-router-dom"

const loginurl = "http://localhost:5000/auth/signin";

const Signin = () => {

    const[showpassword,setshowpassword] = useState(false);


    
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
                <div class="input-icon-container">
                <input type={showpassword ? "text":"password"} id='pass' name='pass' />
                <i class="fa-solid fa-eye icon" onClick={()=>setshowpassword(!showpassword)}></i>
              </div>
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