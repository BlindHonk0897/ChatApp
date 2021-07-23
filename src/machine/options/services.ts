import {ServiceConfig } from "xstate";
import { IContext } from "../types";


const io =  require('socket.io-client');

const services: Record<string,ServiceConfig<IContext,any>> = {
    
    connectToServer:({port,url}:IContext,event:any)=>(send:any)=>{
        console.log("CONNECTING TO SOCKET SERVER .....")
        const socket = io.connect(`${url}${port}`);
       if(socket){
           console.log("CONNECTED TO SOCKET SERVER <Socket id>: ",socket);
           socket.emit('message',"HI");
         send({
             type:'CONNECTED',
             payload:socket
           })
       }else{
          console.log("NOT CONNECTED TO SOCKET SERVER!");
          send({
             type:'NOT_CONNECTED'
           })
       }
       
 },
 listeningToServer:({socket}:IContext,event:any)=>(send:any)=>{
     
     socket.on('connect',(data:any)=>{
         console.log("ID:",socket.id);
         socket.on('message',(msg:any)=>{
             console.log(msg,"---from server");
             
         });
     })
     socket.on('toAll',(msg:any)=>{
         console.log(msg,'BROADCAST FROM SERVER');
        send({
            type:'ASSIGN_USERNAME',
            payload:msg
        })
     });
     socket.on('introduce',(msg:any)=>{
         console.log(msg,'BROADCAST FROM SERVER');
      
     });
     socket.on('left',(msg:any)=>{
         console.log(msg,'[LEFT/OFFLINE] BROADCAST FROM SERVER');
      
     });
     socket.on('USERS',(msg:any)=>{
         console.log(msg,'BROADCAST FROM SERVER');
        send({
            type:'ASSIGN_USERS',
            payload:msg
        })
     })
 },

    };

export default services;