import { createContext, useContext, useEffect, useState } from "react";

import Decodetoken from "./customhooks/Decodetoken";


export const Authcontext = createContext();

export const useAuthcontext = ()=>{
    return useContext(Authcontext);
}

export const Authcontextprovider = ({ children })=>{

    const decodeduser = Decodetoken();

    const [authuser,setauthuser] = useState((decodeduser) || null)

    useEffect(()=>{
        setauthuser(decodeduser);
    },[decodeduser]);

    
    return <Authcontext.Provider value={{authuser,setauthuser}}>
        {children}
        </Authcontext.Provider>;
}

