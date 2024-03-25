import { useEffect } from "react";
import Userinfo from "../../Zustand/Userinfo";
import { useSocketcontext } from "../Socketcontext"


const Uselistenmsg = () => {
 
    const{socket} = useSocketcontext();
    const{messages,setmessages} = Userinfo();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
       
            setmessages([...messages,newMessage])
        })
        return ()=> socket?.off("newMessage");
    },[socket,setmessages,messages])
}

export default Uselistenmsg