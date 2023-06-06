const express = require("express");
const app = express();
const porta = process.env.PORT || 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', (req,res)=> {
    res.sendFile('C:/Users/lilal/Documents/Programação/my-chat-websocket/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});

http.listen(porta, console.log(`Escutando na porta: ${porta}`));  