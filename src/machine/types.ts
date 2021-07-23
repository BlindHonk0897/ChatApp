import {Socket} from 'socket.io-client'

import { AnyEventObject } from 'xstate';

export interface IUser{
    username?:string,
    socket?:Socket
}

export interface IContext{
    port:number,
    url:string,
    socket:Socket | any,
    username:string,
    messages:string[] |any,
    users:IUser[]
}
export interface IMessage{
    msg:string,
    username?:string,
    type?:string
} 
export interface IMachineEvents extends AnyEventObject {}

export interface IRecord<TEntry> {
	[key: string]: TEntry;
}