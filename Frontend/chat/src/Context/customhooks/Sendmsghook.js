
import Userinfo from '../../Zustand/Userinfo'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const msgurl = "http://localhost:5000/message/send/"

const Sendmsghook = () => {
  
    const { selectedcoversation, messages, setmessages } = Userinfo()
    console.log("sending message",messages);
        
    const token = sessionStorage.getItem("token");

    const sendmsg = async(message)=>{
        try {
            const res = await fetch(`${msgurl}${selectedcoversation._id}`,{method:"POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
              },
              body: JSON.stringify({message})
            })
            const data = await res.json()
            if(data.error) throw new Error(data.error);
            setmessages([...messages,data])
            
        } catch (error) {
            toast.error(error.message);
        }

    }

    return {sendmsg}
}

export default Sendmsghook