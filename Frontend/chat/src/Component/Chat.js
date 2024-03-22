import React, { useEffect, useRef } from 'react';
import Getmessagehook from '../Context/customhooks/Getmessagehook';
import { useAuthcontext } from '../Context/Authcontext';
import { extractTime } from '../Context/customhooks/extractTime';
// import Userinfo from '../Zustand/Userinfo';

const Chat = () => {
    const { messages } = Getmessagehook();
    const { authuser } = useAuthcontext();
    const lastmessageref = useRef();
    console.log(authuser);

    useEffect(()=>{
        setTimeout(() => {
            lastmessageref.current?.scrollIntoView({behavior:"smooth"});
        }, 100);
      
    },[messages])

   


    // const { selectedcoversation } = Userinfo();

    


    return (
        <div className='chat-section h-[400px] overflow-y-auto'>
            {messages.map((item, index) => {
                
                const fromMe = item.senderId === authuser?.id;
                const chatclass = fromMe ? "chat-end" :"chat-start";
                const chatcolor = fromMe ? "bg-primary":"";
                const formatedTime = extractTime(item.createdAt);
                return (
                    <div className={`chat ${chatclass}`}>
                        <div key={item._id} ref={lastmessageref}></div>
                        <div key={index} className={`chat-bubble ${chatcolor} text-white`}>{item.message}</div>
                        <div className='chat-footer opacity-70 flex gap-1 items-center text-xs'>{formatedTime}</div>
                    </div>
                );
            })}
           
            {messages.length === 0 && (
                <p className='text-center'>Message to start a conversation</p>
            )}
        </div>
    )
}

export default Chat;
