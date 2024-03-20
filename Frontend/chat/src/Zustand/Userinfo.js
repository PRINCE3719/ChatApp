import {create} from "zustand"


const Userinfo = create((set)=>({
    selectedcoversation:null,
    setselectedcoversation : (selectedcoversation) => set({selectedcoversation}),
    messages:[],
    setmessages : (messages) => set({messages})
}));

export default Userinfo