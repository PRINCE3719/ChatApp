const express = require("express");
const app = express();
const dotenv = require("dotenv")
const authroutes = require("../Backend/routes/authroutes.js");
const messageroutes = require("../Backend/routes/messageroutes.js");
const userRoutes = require("../Backend/routes/userRoutes.js");
const connectdb = require("./database/database.js");
const cookieparse = require("cookie-parser");
const cors = require("cors");


dotenv.config();
app.use(cookieparse())

app.use(cors())

const port = process.env.PORT;


app.get("/",(req,res)=>{
    res.send("server is ready");
});


app.use("/auth",authroutes);

app.use("/message",messageroutes);

app.use("/users",userRoutes);

app.listen(port,()=> {
    connectdb();
    console.log(`server running on ${port}`);

});
