import React, { useEffect } from 'react'
import "./CSS/home.css"
import Userinfo from '../Zustand/Userinfo'
import Userwithidhook from '../Context/customhooks/Userwithidhook'

const loggeduserUrl = "http://localhost:5000/users/"

const Noconversation = () => {

const {loggedUserData}=Userwithidhook()
  const Name = loggedUserData.finduser;

  
  return (
    <div className='div-in-conv'>
        <div className='no-content'>
        <p>Welcome 👋 {Name.name} <br/>Select a chat to start messaging</p>
        <i class="fa-regular fa-message"></i>
        </div>
   
    </div>
  )
}

export default Noconversation