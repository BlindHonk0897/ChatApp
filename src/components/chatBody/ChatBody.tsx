import React from 'react'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'; 
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import './ChatBody.css'
import { useParams } from 'react-router-dom';
import Message from '../message/Message'
import ChatInput from '../chatInput/ChatInput'

export interface IChatProps{
    socket:any,
    messages:any
}
function ChatBody(props:IChatProps) {
    const {roomId}:any = useParams();
    console.log(props.messages,"OYYYYYYYYYYYYYYYYYYYYYYYYY");
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
                   <Message message="YOYOY"/>
                   {
                       props.messages.map((message:any)=>{
                            <Message message={message}></Message>
                       })
                   }
                  
            </div>
            <ChatInput socket={props.socket}></ChatInput>
        </div>
    )
}

export default ChatBody
