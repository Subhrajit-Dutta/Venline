const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000 || process.env.PORT;
const server = http.createServer(app);
//sending static path express
app.use(express.static(path.join(__dirname,'/client')))
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
