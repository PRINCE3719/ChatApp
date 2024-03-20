import React from 'react'
import Side from './Side'
import Conversation from './Conversation'
import back from "../Component/Assets/pexels-tranmautritam-245032.jpg"
import "./CSS/home.css"
import Noconversation from './Noconversation'

const Home = () => {
    return (
        <div className='home-div' style={{ backgroundImage: `url(${back})`,
         height: "100vh",
          width: "100%",
           backgroundPosition: "center", 
           backgroundSize: "contain", 
           display: "grid", 
           placeItems: "center" }}>
            <div className='home-content'>
                <Side />
                <div className='line'></div>
                <Conversation />
               
            </div>

        </div>
    )
}

export default Home