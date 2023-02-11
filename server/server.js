const path = require('path');
const http = require('http');
const express = require('express');
const dotenv= require('dotenv')
const colors= require("colors")
const connectDb=require('./config/Database')
const userRoutes= require("./routes/userRoutes")
dotenv.config()
connectDb()
const app = express();
app.use(express.json());
const PORT = 3000 || process.env.PORT;
const server = http.createServer(app);

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));
app.use("/api/consumer",userRoutes)
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.green.bold);
});
