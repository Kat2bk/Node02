const express = require('express');

const server = express();
server.use(express.json());

const port = 8080;

server.get('/api', (req, res) => {
    res.send('Welcome to the API');
})

server.listen(port, () => {
    console.log(`server is running on localhost:${port}`);
})

