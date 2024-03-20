import React, { useEffect, useState } from 'react'


const userurl = "http://localhost:5000/users/all";

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


    }, [])

    return {user};

}

export default Userhook