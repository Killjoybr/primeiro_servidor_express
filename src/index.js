const express = require('express');
const server = express();

server.get('/', (request, response) =>{
    response.send('Primeiro servidor express do Killjas, olá ')
});

server.listen(3000)