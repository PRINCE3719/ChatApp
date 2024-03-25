import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "../CSS/Signup.css"
import toast from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';




const signupurl = "https://backend-chat-1.onrender.com/auth/signup";


const Signup = () => {

  const [showpass, setshowpass] = useState(false);
  const navigate = useNavigate();







  const authregister = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Ensure all fields are filled
    if (!data.name || !data.email || !data.password || !data.gender) {
      toast.error('Please fill out all fields.', {
        style: {
          background: '#333',
          color: '#fff'
        }
      });
      return;
    }

    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      gender: data.gender
    };


    fetch(signupurl, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then(errormsg => {
            throw new Error(errormsg.error);
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          toast.success('Signup successful!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          localStorage.setItem("chat-user", JSON.stringify(data));

          navigate("/");

        }


      })
      .catch((error) => {
        toast.error(error.message, {
       style:{
        background: '#333',
        color: '#fff'
       }
        });
      });
  }




  return (
    <div className='login'>
      <div className='login-page'>
        <div className='login-4'>
          <h3 className='text-lg font-medium text-xl'>Sign Up</h3>
          <div className='signup-sec'>
            <form id='form-sec' onSubmit={authregister}>
              <div className='input-div'>
                <label>Name</label>
                <input type='text' id='name' name='name' autoComplete='off' />
              </div>

              <div className='input-div'>
                <label>username</label>
                <input type='text' id='email' name='email' autoComplete='off' />
              </div>
              <div className='input-div'>
                <label>password</label>
                <div class="input-icon-container">
                  <input type={showpass ? "text" : "password"} id='pass' name='password' />
                  <i class="fa-solid fa-eye icon" onClick={() => setshowpass(!showpass)}></i>
                </div>
              </div>
              <label>Gender</label>
              <div className='checkbox-div'>
                <div className='radio-div'>

                  <input type="radio" name="gender" className="radio radio-info" id='checkbox' value='male' />
                  <label>Male</label>
                </div>
                <div className='radio-div'>

                  <input type="radio" name="gender" className="radio radio-info" id='checkbox0' value='female' />
                  <label>Female</label>
                </div>
              </div>


              <button id='signin-butn'>Sign up</button>
            </form>
            <div>
              <h2 className='text-center mt-3'>Already have an account ? <Link to='/'>Signin</Link></h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Signup


// if (res.ok) {

//
// } else {

//   res.text().then(errorMessage => {
//     toast.error(`Error: ${errorMessage}`);
//   });
// }