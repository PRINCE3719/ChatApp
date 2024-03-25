import React from 'react'
import Side from './Side'
import Conversation from './Conversation'

import "./CSS/home.css"


const Home = () => {
    return (
        <div className='home-div'>
            <div className='home-content'>
                <Side />
                <div className='bg-gray-200 w-0.5'></div>
                <Conversation />
               
            </div>

        </div>
    )
}

export default Home