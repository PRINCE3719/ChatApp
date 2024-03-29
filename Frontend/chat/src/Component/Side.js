import React, { useState } from 'react'
import "./CSS/home.css"
import Userhook from '../Context/customhooks/Userhook'
import Userinfo from '../Zustand/Userinfo';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSocketcontext } from '../Context/Socketcontext';




const Side = () => {
    const navigate = useNavigate();

    const { user } = Userhook();

    const { selectedcoversation, setselectedcoversation } = Userinfo();

    const { online } = useSocketcontext();



    const [search, setsearch] = useState("");




    const logout = () => {
        Userinfo.getState().Logout();
        sessionStorage.removeItem("token");
        navigate('/');


    }

    const handlesubmit = (e) => {
        e.preventDefault()
        if (!search) return;
        if (search.length < 3) {
            toast.error("more than 3 character needed!",{
                style:{
                    background: '#333',
                    color: '#fff'
                }
            });
        }
        const conversation = user.find((c) => c.name.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
            setselectedcoversation(conversation);
            setsearch('');
        }
        else {
            toast.error("no user", {
                style: {
                    background: '#333',
                    color: '#fff'
                }
            });
        }
    }





    return (
        <div className='sidebar-div'>
            <form onSubmit={handlesubmit}>
                <div className='input-search' >
                    <input type='text' name='search' id='search' placeholder='search..' autoComplete='off' style={{ color: "black" }} value={search} onChange={(e) => setsearch(e.target.value)} />
                    <div className='icon-div'><i class="fa-solid fa-magnifying-glass" style={{ color: "#000000;" }}></i></div>
                </div>
            </form>


            <div className='user-section'>
                {user.map((item, index) => {
                    const isselected = item._id === selectedcoversation?._id;
                    const isonline = online.includes(item._id);

                    const bgColorClass = isselected ? 'bg-gray-200' : '';

                    return (
                        <>
                            <div className={`user-div ${bgColorClass}`} onClick={() => setselectedcoversation(item)}>
                                <div className={`avatar ${isonline ? 'online' : ""}`}>
                                    <div className="w-14 rounded-full">
                                        <img src={item.profilepic} alt='' />
                                    </div>
                                </div>
                                <div className='user-name'>
                                    <p>{item.name}</p>
                                </div>
                            </div>
                            {index === user.length - 1 ? "" : <div className="streak" />}
                        </>
                    )
                })}






            </div >

            <div className='logout-div' onClick={logout}>
                <i class="fa-solid fa-arrow-right-from-bracket fa-flip-horizontal" style={{ color: "#000000;" }}></i>
            </div>
        </div>
    )
}

export default Side