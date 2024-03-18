import React from 'react'
import "./CSS/home.css"

const Conversation = () => {
  return (
    <div className='conversation-div' style={{width:"65%"}}>
      <div className='name-head'>
        <p>Prince Prakash</p>
      </div>
      <div className='chat-section'>
        <div className='chat-display'>
        </div>
        <div className='chat-input'>
        <input type='text' id='text' name='text'/>
        <i class="fa-regular fa-paper-plane" style={{color: "#000000;"}}></i>
        </div>
       
      </div>
    </div>
  )
}

export default Conversation
