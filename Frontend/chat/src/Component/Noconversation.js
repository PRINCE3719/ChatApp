import React from 'react'
import "./CSS/home.css"

import Userwithidhook from '../Context/customhooks/Userwithidhook'



const Noconversation = () => {

const {loggedUserData}=Userwithidhook()
 

  if(!loggedUserData || !loggedUserData.finduser.name){
    return<div className='text-center'>Loading...</div>
  }

  const username = loggedUserData.finduser;

  
  return (
    <div className='div-in-conv'>
        <div className='no-content'>
        <p>Welcome 👋 {username.name} <br/>Select a chat to start messaging</p>
        <i class="fa-regular fa-message"></i>
        </div>
   
    </div>
  )
}

export default Noconversation