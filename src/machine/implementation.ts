import { env } from "process";
import { assign } from "xstate";
const io =  require('socket.io-client');

const implemention = {
    services:{
        
        connectToServer:({port,url}:any,event:any)=>(send:any)=>{
               const socket = io.connect(`${url}${port}`);
               send({
                type:'CONNECTED',
                payload:socket
            })
            
        },
        listeningToServer:({socket}:any,event:any)=>(send:any)=>{
            
            socket.on('connect',(data:any)=>{
                console.log("ID:",socket.id);
                socket.on('message',(msg:any)=>{
                    console.log(msg,"---from server");
                    
                });
            })
            socket.on('toAll',(msg:any)=>{
                console.log(msg,'BROADCAST FROM SERVER');
               send({
                   type:'ASSIGN',
                   payload:msg
               })
            })
        }
    },
    actions:{
        assignSocket:assign({
            socket:(context:any,event:any)=> event.payload
        }),
        assignMessage:assign({
            messages:(context:any,event:any)=>{
                const v = [...context.messages, event.payload];
                //console.log('YOOOOOOOWWWW',v);
                return[...context.messages, event.payload]
            }
        }),
    }
}


export default implemention;