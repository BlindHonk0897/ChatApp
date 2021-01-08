import { Button } from '@material-ui/core'
import React, { useRef, useState ,useLayoutEffect} from 'react'
import './ChatInput.css'
import io from 'socket.io-client';

export interface IChatProps{
    socket:any
    displayMessage:any
    username:any
}
function ChatInput(props:IChatProps) {

    const  [input,setInput] = useState('');
    const sendMessage = ()=>{
        props.socket.emit('message',{msg:input,username:props.username});
        props.displayMessage({msg:input,type:'messageRight',username:props.username});
    }
    return (
        <div className="chatInput">
            <input  placeholder="Type message here" onKeyUp={(e)=>{
                     setInput((e.target as HTMLInputElement).value);
                    if(e.key === 'Enter' || e.keyCode === 13){
                        sendMessage();
                        (e.target as HTMLInputElement).value = '';
                    }
                }}/>
        </div>
    )
}

export default ChatInput
