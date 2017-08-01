const express = require('express');
const socketIo = require('socket.io');
const app = express();
const nrp = require('./redis-connection');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

var httpServer = app.listen('3000', () => {
    console.log('server listening at port 3000');
});

var io = socketIo(httpServer);
var mySocket;

io.on('connection', (socket) => {
    mySocket = socket;
    console.log('socket receive connection');
    socket.on('research', (data) => {
        //tell pubsub to perfrom pixabay search
        console.log('server socket receive research event');
        nrp.emit('research', data);
    });
});

nrp.on('result', (data) => {
    io.sockets.emit('result', data);
});

nrp.on('error', (err) => {
    mySocket.emit('error', { err });
    console.error(err);
});