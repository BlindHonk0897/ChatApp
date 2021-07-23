
import { ActionFunctionMap, assign } from "xstate";
import {IContext, IMessage, IUser} from "../types";


const actions: ActionFunctionMap<IContext,any> = {

    assignSocket:assign({
        socket:(context,event:any)=> {
            return event.payload
        }
    }),
    assignUsername:assign({
        username:(context,event:any)=> {
            return event.payload
        }
    }),
    assignMessage:assign({
        messages:(context,event:any)=>{
            const m :IMessage ={
                msg:event.payload,
                type:'message'
            }
            const v = [...context.messages, m];
            return[...context.messages, m]
        }
    }),
    requestUsers:({socket},_event:any)=>{
        socket.emit('GET_USERS',`from ${socket.id}`);
    },
    assignUsers:assign({
        users:(context,event:any)=>{
            return event.payload
        }
    }),

    emitIntroduce:({socket},{payload})=>{
        socket.emit('introduceUser',{socket_id:payload.socket_id,username:payload.username});
    }
    
}

export default actions;