
import Userinfo from '../../Zustand/Userinfo'
import toast from 'react-hot-toast';

const msgurl = "https://backend-chat-2.onrender.com/message/send/"

const Sendmsghook = () => {
  
    const { selectedcoversation, messages, setmessages } = Userinfo()

        
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