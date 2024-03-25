import React, { createContext, useContext, useEffect, useState } from "react";
import Userinfo from "../Zustand/Userinfo";
import io from "socket.io-client";

export const SocketContext = createContext();


export const useSocketcontext = ()=>{
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [online, setOnline] = useState([]);

    const { authUser } = Userinfo();
   

    useEffect(() => {
        if (authUser) {
            const socketInstance = io('http://localhost:5000', {
                query: {
                    userId: authUser.id,
                },
            });

            setSocket(socketInstance);
             socketInstance.on("getonlineuser",(users)=>{
                setOnline(users);
             });

            return () => socketInstance.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]); // Add authUser as a dependency to re-run the effect when authUser changes

    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    );
};
