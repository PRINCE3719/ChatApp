import React, { useEffect, useRef } from 'react';
import Getmessagehook from '../Context/customhooks/Getmessagehook';
import { extractTime } from '../Context/customhooks/extractTime';
import Userinfo from '../Zustand/Userinfo';
import Uselistenmsg from '../Context/customhooks/Uselistenmsg';


const Chat = () => {
    const { messages } = Getmessagehook();
    
 
     const {authUser,initializeAuthUser} = Userinfo();

     Uselistenmsg();

    
    
    const lastmessageref = useRef();

    useEffect(() => {
        initializeAuthUser();
    }, [initializeAuthUser]);


    useEffect(()=>{
        setTimeout(() => {
            lastmessageref.current?.scrollIntoView({behavior:"smooth"});
        }, 100);
      
    },[messages])

   


  

    


    return (
        <div className='chat-section h-[400px] overflow-y-auto'>
            {messages.map((item, index) => {
                
                const fromMe = item.senderId === authUser?.id;
                const chatclass = fromMe ? "chat-end" :"chat-start";
                const chatcolor = fromMe ? "bg-primary":"";
                const formatedTime = extractTime(item.createdAt);
                return (
                    <div className={`chat ${chatclass}`}  key={item._id}>
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
