import React from 'react'
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar'
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'
import ChatBody from '../chatBody/ChatBody';
import './Chat.css'
import { PeopleSharp } from '@material-ui/icons';

export interface IChatProps{
      socket:any,
      messages:any,
      username:any,
      state:any
}

function Chat(props:IChatProps) {
  console.log(props.state.context.username,'CHAT')
  const username = props.state.context.username;
  return (
    <div>
      <Router>
        <Header></Header>
        <div className="chatApp__body">
            <Sidebar username={props.username}></Sidebar>
            <Switch>
              <Route path="/roomId/:roomId">
                <h1>hey</h1>
              </Route>
              <Route path="/">
              <ChatBody socket={props.socket} username={username} messages={props.messages}></ChatBody>
              </Route>
            </Switch>
        </div>
      </Router>
      
    </div>
  )
}

export default Chat
