import { createContext, useContext, useState } from "react";

export const Authcontext = createContext();

export const useAuthcontext = ()=>{
    return useContext(Authcontext);
}

export const Authcontextprovider = ({ children })=>{

    const [authuser,setauthuser] = useState(JSON.parse(sessionStorage.getItem("chat-user")) || null)
    return <Authcontext.Provider value={{authuser,setauthuser}}>
        {children}
        </Authcontext.Provider>;
}