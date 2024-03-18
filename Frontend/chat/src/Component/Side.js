import React from 'react'
import "./CSS/home.css"

const Side = () => {
    return (
        <div className='sidebar-div'>
            <div className='input-search'>
                <input type='text' name='search' id='search' placeholder='search..' autoComplete='off' />
                <div className='icon-div'><i class="fa-solid fa-magnifying-glass" style={{ color: "#000000;" }}></i></div>
            </div>
            <div className='user-section'>
                <div className='user-div'>
                    <div className='user-image'></div>
                    <div className='user-name'>
                        <p>Prince Prakash</p>
                    </div>
                </div>
             
              

                
            </div>
            <div className='logout-div'>
            <i class="fa-solid fa-arrow-right-from-bracket fa-flip-horizontal" style={{color: "#000000;"}}></i>
            </div>

        </div>
    )
}

export default Side