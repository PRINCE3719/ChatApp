import { jwtDecode } from "jwt-decode";
import {create} from "zustand"



const Userinfo = create((set)=>({
    selectedcoversation:null,
    setselectedcoversation : (selectedcoversation) => set({selectedcoversation}),
    messages:[],
    setmessages : (messages) => set({messages}),
    authUser:null,
    setauthUser : (user) => set({authUser:user}),
    initializeAuthUser: () => {
        const token = sessionStorage.getItem("token");
        if (token) {
          try {
            const decodedUser = jwtDecode(token);
          
            set({ authUser: decodedUser });
          } catch (error) {
            console.error("Error decoding token:", error.message);
            set({ authUser: null });
          }
        } else {
          set({ authUser: null });
        }
     },
     Logout: () => {
      
        sessionStorage.removeItem("token");
        set({ authUser: null, selectedcoversation: null });
    },
}));

export default Userinfo