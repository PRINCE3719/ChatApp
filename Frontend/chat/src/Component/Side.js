import React from 'react'
import "./CSS/home.css"
import Userhook from '../Context/customhooks/Userhook'
import Userinfo from '../Zustand/Userinfo';
import { useNavigate } from 'react-router-dom';




const Side = () => {
    const navigate = useNavigate();

    const{user}= Userhook();

    const{selectedcoversation,setselectedcoversation} = Userinfo()
   

   
    
    const logout = ()=>{
        
       sessionStorage.removeItem("token");
        navigate('/');
       
        
    }

  

    
    
    return (
        <div className='sidebar-div'>
            <div className='input-search'>
                <input type='text' name='search' id='search' placeholder='search..' autoComplete='off' />
                <div className='icon-div'><i class="fa-solid fa-magnifying-glass" style={{ color: "#000000;" }}></i></div>
            </div>

            <div className='user-section'>
                   {user.map((item,index)=>{
                     const isselected = item._id === selectedcoversation?._id;

                     const bgColorClass = isselected ? 'bg-gray-200' : '';
                    
                    return(
                        <>
                        <div className={`user-div ${bgColorClass}`} onClick={()=>setselectedcoversation(item)}>
                            <div className='user-image'>
                                <img src={item.profilepic} alt=""/>
                            </div>
                            <div className='user-name'>
                                <p>{item.name}</p>
                            </div>
                            
                        </div>
                       {index === user.length - 1 ? "" : <div className="streak"/>} 
                        </>
                    )
                   })}
                       
                    
                        
                    
                

            </div>
            <div className='logout-div' onClick={logout}>
                <i class="fa-solid fa-arrow-right-from-bracket fa-flip-horizontal" style={{ color: "#000000;" }}></i>
            </div>
        </div>
    )
}

export default Side