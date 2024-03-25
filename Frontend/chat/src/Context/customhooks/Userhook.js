import { useEffect, useState } from 'react'


const userurl = "https://backend-chat-1.onrender.com/users/all";

const Userhook = () => {
    const [user, setuser] = useState([]);

    const token = sessionStorage.getItem("token");

    useEffect(() => {
        const getusers = async () => {
            const res = await fetch(userurl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await res.json();
            setuser(data);
        }
        getusers();


    }, [token])

    return {user};

}

export default Userhook