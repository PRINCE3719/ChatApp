import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "../CSS/Signup.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useAuthcontext } from '../../Context/Authcontext';



const signupurl = "http://localhost:5000/auth/signup";


const Signup = () => {

  const [showpass, setshowpass] = useState(false);
  const navigate = useNavigate();
  const{authuser,setauthuser} =useAuthcontext()

  




  const authregister = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Ensure all fields are filled
    if (!data.name || !data.email || !data.password || !data.gender) {
      toast.error('Please fill out all fields.', {
        theme: "dark",
        autoClose:2000,
        pauseOnHover:false,
        pauseOnFocusLoss:false
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
          return res.json().then(errormsg=>{
            throw new Error(errormsg.error);
          });
        }
        return res.json();
      })
      .then((data) => {
        if(data){
          toast.success('Signup successful!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          sessionStorage.setItem("chat-user",JSON.stringify(data));
          setauthuser(data);
          navigate("/");
          
        }
       
        console.log(data);
      })
      .catch((error) => {
        toast.error(error.message,{
           autoClose: 3000,
           theme:"dark",
           pauseOnHover:false
        });
      });
  }




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
                  <input type='radio' id='checkbox' value="male" name='gender' />
                  <label>Male</label>
                </div>
                <div className='radio-div'>
                  <input type='radio' id='checkbox0' value="female" name='gender' />
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


// if (res.ok) {

//
// } else {

//   res.text().then(errorMessage => {
//     toast.error(`Error: ${errorMessage}`);
//   });
// }