import React from 'react'
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar'
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'
import ChatBody from '../chatBody/ChatBody';
import './Chat.css'

export interface IChatProps{
      socket:any,
      messages:any
}

function Chat(props:IChatProps) {
  return (
    <div>
      <Router>
        <Header></Header>
        <div className="chatApp__body">
            <Sidebar></Sidebar>
            <Switch>
              <Route path="/roomId/:roomId">
                <h1>hey</h1>
              </Route>
              <Route path="/">
              <ChatBody socket={props.socket} messages={props.messages}></ChatBody>
              </Route>
            </Switch>
        </div>
      </Router>
      
    </div>
  )
}

export default Chat
