const express = require('express');
const mainRouter = require('./api/server');
const server = express();
server.use(express.json());

server.use('/api', mainRouter);

const port = 8080;


server.listen(port, () => {
    console.log(`server is running on localhost:${port}`);
})

