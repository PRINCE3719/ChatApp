import { useEffect, useState } from "react";
import Userinfo from "../../Zustand/Userinfo";

const loggeduser = "https://backend-chat-2.onrender.com/users/";

const Userwithidhook = () => {
    const token = sessionStorage.getItem("token");
    const { authUser, initializeAuthUser } = Userinfo();
    const [loggedUserData, setLoggedUserData] = useState(null); 

    const userid = authUser?.id;

    useEffect(() => {
        initializeAuthUser();
    }, [initializeAuthUser]);

    useEffect(() => {
        const getParticularuser = async () => {
           
            try {
                const res = await fetch(`${loggeduser}${userid}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                if (!res.ok) {
                    throw new Error(`Fetch error: ${res.statusText}`);
                }
                
                const contentType = res.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    const data = await res.json();
                   
                    setLoggedUserData(data); 
                } else {
                    console.error('Response is not JSON:', await res.text());
                }
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        }
        getParticularuser();
    }, [token, userid]); 

    return { loggedUserData }; 
}

export default Userwithidhook;
