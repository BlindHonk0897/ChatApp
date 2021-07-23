    const express = require('express')

    const app = express();
    const http = require('http').createServer(app);
    const io = require('socket.io')(http); 
    //console.log('io',io);
    http.listen(4000, ()=> console.log( `listening on port : 4000` ))

    io.on('connection',(socket)=>{
        console.log("CONNECTED",socket.id);
        socket.on("message",(message)=>{
            console.log(`MESSAGE FROM ${socket.id} :`,message)
        })
        socket.on('introduceUser',(data)=>{
            console.log(`INTRODUCE:`,data)
        })
    })