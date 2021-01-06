import React, { useState ,useRef,useEffect} from 'react';
import './App.css';
import {useMachine} from '@xstate/react'
import clientMachine from './machine'
import Chat from './components/chat/Chat';

function App() {
const [state,send] = useMachine(clientMachine);
const [message,setMessage] = useState('');
const {socket}:any = state.context;
const messages:any = useState(state.context.messages);

useEffect(()=>{
  //console.log(messages,'@@@@@@@@@@@@@@@@@@@@@');
  console.log(state.context);
  
},[messages])

  return (
    
    <div className="app">
    {<Chat socket={socket} messages={messages}></Chat>}
    </div>
  );
}

export default App;
