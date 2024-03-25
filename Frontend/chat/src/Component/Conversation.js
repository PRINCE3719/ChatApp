import React, { useState } from 'react'
import "./CSS/home.css"
import Noconversation from './Noconversation'
import 'react-toastify/dist/ReactToastify.css';
import Chat from './Chat';

import Sendmsghook from '../Context/customhooks/Sendmsghook';
import Userinfo from '../Zustand/Userinfo';




const Conversation = () => {

 const [message,setmessage] = useState("");

 const{selectedcoversation}=Userinfo();

 const{sendmsg}=Sendmsghook();

 
 


  const handlesubmit= async (e) => {
    e.preventDefault()
    if(!message) return;
    await sendmsg(message);
    setmessage("");
 
  }







  return (

    <div className='conversation-div' style={{ width: "70%" }}>
      {!selectedcoversation ? (<Noconversation />) : (
        <>
          <div className='name-head mb-1'>
            <p>To: {selectedcoversation.name}</p>
          </div>
          <Chat/>
          <div className='chat-input'>
            <form className='msg-form' onSubmit={handlesubmit}>
              <input type='text' id='text' name='text' value={message} onChange={(e)=>setmessage(e.target.value)} autoComplete='off'/>
              <i class="fa-regular fa-paper-plane" style={{ color: "#000000;" }}></i>
            </form>

          </div>
        </>
      )}


    </div>


  )
}


export default Conversation
