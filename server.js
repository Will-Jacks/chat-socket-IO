const express = require("express");
const app = express();
const porta = process.env.PORT || 3000;

app.use(express.static('public'));
app.get('/', (req,res)=> {
    res.sendFile('C:/Users/lilal/Documents/Programação/my-chat-websocket/index.html');
});
app.listen(porta, console.log(`Escutando na porta: ${porta}`));