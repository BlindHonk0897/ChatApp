import { Machine } from "xstate";
import config from "./config";
import  options  from "./options";
import {IContext} from "./types"
import {Socket} from 'socket.io-client'
const context:IContext = {
    port:5000,
    url:'http://localhost:',
    socket:null,
    username:'',
    messages:[],
    users:[]
}

const  clientMachine = () => {
    return Machine({...config, context}, options)
}

export default clientMachine;






