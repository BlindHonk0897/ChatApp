import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Message.css'

interface IMessageProps{
    message:any
}

function Message(props:IMessageProps) {
    return (
        <div className="message">
            <AccountCircleIcon/>
            <div className="message__info">
                 <h4>dan</h4>:  
                 <p>{props.message}</p>
            </div>
        </div>
    )
}
 
export default Message
