import React, { useState } from 'react'
import "../CSS/Login.css"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const loginurl = "https://backend-chat-1.onrender.com/auth/signin";

const Signin = () => {

    const [showpassword, setshowpassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata)


        if (!data.email || !data.password) {
            toast.error("Please fill out all the fields", {
                style: {
                    background: '#333',
                    color: '#fff'
                }
            });
            return;

        }

        const payload = {
            email: data.email,
            password: data.password
        };

        fetch(loginurl, {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            },

            body: JSON.stringify(payload)
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then(errmsg => {

                        throw new Error(errmsg.token);
                    })
                }
                return response.json();
            })
            .then((data) => {
                if (data.token) {
                    toast.success('Login successful!', {
                        style: {
                            background: '#333',
                            color: '#fff'
                        }
                    });


                    sessionStorage.setItem("token", data.token);

                    navigate("/home")



                }


            })
            .catch((error) => {
                toast.error(error.message, {
                    theme: "dark",
                    autoClose: 2000,
                    pauseOnHover: false
                });
            })





    }


    return (
        <div className='login'>
            <div className='login-page'>

                <div className='login-2'>
                    <h3 className='text-center text-2xl font-medium'>Login</h3>
                    <div className='login-form'>
                        <form onSubmit={handleSubmit} className='login-form'>
                            <div className='input-div'>
                                <label>username</label>
                                <input type='text' id='email' name='email' autoComplete='off' />
                            </div>
                            <div className='input-div'>
                                <label>password</label>
                                <div class="input-icon-container">
                                    <input type={showpassword ? "text" : "password"} id='pass' name='password' />
                                    <i class="fa-solid fa-eye icon" onClick={() => setshowpassword(!showpassword)}></i>
                                </div>
                            </div>
                            <button id='signin-butn'>Sign in</button>
                        </form>
                        <div>
                            <h2 className='text-center mb-5'>Don't have an account ? <Link to='/Signup'>Signup</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin