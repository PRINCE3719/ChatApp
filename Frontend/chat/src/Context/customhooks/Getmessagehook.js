import { useEffect } from 'react';
import Userinfo from '../../Zustand/Userinfo';
import toast from 'react-hot-toast';


const getmsgurl = "https://backend-chat-2.onrender.com/message/";

const Getmessagehook = () => {
    const { messages, setmessages, selectedcoversation } = Userinfo();
    


    const token = sessionStorage.getItem("token");
    
   

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                

                // if{ (!selectedcoversation?._id)
                // setmessages([]);
                // return
                // }
                if(!selectedcoversation?._id ){
                    return;
                }

             

                const res = await fetch(`${getmsgurl}${selectedcoversation._id}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = await res.json();
              
                if (data.error) throw new Error(data.error);

                // Update messages state with fetched data
                
                setmessages(data);
            } catch (error) {
                toast.error(error.message);
            }
        };

     
        fetchMessages();
    }, [selectedcoversation?._id, setmessages,  token]);

    return { messages };
};

export default Getmessagehook;
