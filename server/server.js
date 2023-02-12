const path = require('path');
const http = require('http');
const express = require('express');
const dotenv= require('dotenv')
const colors= require("colors")
const connectDb=require('./config/Database')
const userRoutes= require("./routes/userRoutes")
const homeRoutes=require("./routes/Homeroute")
dotenv.config()
connectDb()
const app = express();
app.use(express.json());
const PORT = 5000 || process.env.PORT;
const server = http.createServer(app);
//sending static path express
console.log('/client')
app.use(express.static(path.join(__dirname,'../client')))
//route for registration credential
app.use("/api/consumer",userRoutes)
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.green.bold);
});
