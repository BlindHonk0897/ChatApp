import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Message.css'

interface IMessageProps{
    message:any,
    className?:any,
    username:any
}

function Message(props:IMessageProps) {
    return (
        <div className={props?.className?props.className:"message"}>
            <AccountCircleIcon/>
            <div className="message__info">
                 <h4>{props.username}</h4>:  
                 <p>{props.message}</p>
            </div>
        </div>
    )
}
 
export default Message
