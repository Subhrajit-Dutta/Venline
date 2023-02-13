const path = require('path');
const http = require('http');
const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;
const server = http.createServer(app);

// Set static folder
app.use(express.static(path.join(__dirname, 'client')));

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});