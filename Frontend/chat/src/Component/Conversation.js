import React from 'react'
import "./CSS/home.css"
import Noconversation from './Noconversation'
import Userinfo from '../Zustand/Userinfo'



const Conversation = () => {

  const { selectedcoversation, setselectedcoversation } = Userinfo()



  return (

    <div className='conversation-div' style={{ width: "65%" }}>
      {!selectedcoversation ? (<Noconversation />) : (
        <>
          <div className='name-head'>
            <p>To: {selectedcoversation.name}</p>
          </div>
          <div className='chat-section'>
            <div className="chat chat-start pt-2">
              <div className="chat-bubble">It's over Anakin</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble">You underestimate my power!</div>
            </div>
          </div>
          <div className='chat-input'>
            <input type='text' id='text' name='text' />
            <i class="fa-regular fa-paper-plane" style={{ color: "#000000;" }}></i>
          </div>
        </>
      )}


    </div>


  )
}

export default Conversation
