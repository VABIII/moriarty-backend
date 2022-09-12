const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const server = express();
server.use(express.json());
server.use(cors);
server.use(helmet);

server.get('/', (req, res, next) => {
    res.json({api: 'up'});
});

server.use('*', (req, res, next) => {
    res.json({api: 'URL not found'});
});

server.use((err, req, res, next) => {
    res.status(500)
        .json({
            error: err.message,
            stack: err.stack
        });
});









module.exports= server;


































