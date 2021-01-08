import React from 'react'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'; 
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import './ChatBody.css'
import { useParams } from 'react-router-dom';
import Message from '../message/Message'
import ChatInput from '../chatInput/ChatInput'
import { useState } from 'react';

export interface IChatProps{
    socket:any,
    messages:any,
    username:any
}
interface IMessage{
    msg:string,
    type?:string,
    username:any
}
function ChatBody(props:IChatProps) {
    const {roomId}:any = useParams();
    const [messages,setMessages] = useState(props.messages[0]);

    const displayMessage = (msg:IMessage)=>{
        const mssgs = [...messages, msg];
        setMessages(mssgs);
    }
    props?.socket?.on('toAll',(msg:any)=>{
        const m:IMessage={
            msg:msg.msg,
            type:'message',
            username:msg.username
        }
        setMessages([...messages,m])    
    })
    return (
        <div className="chatBody">
            <div className="chat__header">
                <div className="chat__headerLeft">
                   <h4 className="chat_channelName">
                   <strong># Youtube</strong>
                   <StarBorderOutlinedIcon/>
                   </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                    <InfoOutlinedIcon/> Details
                    </p>
                </div>
               
            </div>
            <div className="chat__messages">

                  {/* <Message message="YOYOY" className="messageRight"/> */}
                   {
                       messages.map((message:any)=>{
                           return <Message key={message.username} username={message.username} message={message.msg} className={message.type}/> 
                       })
                   }
                   {/* {
                       newMessage?.map(msg=>{
                        return <Message message={msg} className="messageRight"/> 
                       })
                   } */}
            </div>
            <ChatInput socket={props.socket} username={props.username} displayMessage={displayMessage}></ChatInput>
        </div>
    )
}

export default ChatBody
