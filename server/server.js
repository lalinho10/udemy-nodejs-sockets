const http = require('http');
const path = require('path');

const express = require('express');
const socketio = require('socket.io');


const APP_PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.resolve(__dirname, '../public');


const app = express();
let server = http.createServer(app);

app.use(express.static(PUBLIC_PATH));

server.listen(APP_PORT, (err) => {
    if (err) throw new Error(err);

    console.log(`Escuchando peticiones en el puerto ${ APP_PORT }`);
});

module.exports.io = socketio(server);
require('./sockets/socket');