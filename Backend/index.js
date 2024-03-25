const express = require("express");

const dotenv = require("dotenv")
const authroutes = require("../Backend/routes/authroutes.js");
const messageroutes = require("../Backend/routes/messageroutes.js");
const userRoutes = require("../Backend/routes/userRoutes.js");
const connectdb = require("./database/database.js");
const cookieparse = require("cookie-parser");
const cors = require("cors");
const {app, server} = require("./Socket/Socket.js");



dotenv.config();

app.use(express.json());
app.use(cookieparse())

const corsOptions = {
    origin: 'https://66018666db8a1b25baccc5dd--benevolent-faloodeh-79b7fe.netlify.app/', 
    credentials: true,
};


app.use(cors(corsOptions));

const port = process.env.PORT;


app.get("/",(req,res)=>{
    res.send("server is ready");
});


app.use("/auth",authroutes);

app.use("/message",messageroutes);

app.use("/users",userRoutes);

server.listen(port,()=> {
    connectdb();
    console.log(`server running on ${port}`);

});
