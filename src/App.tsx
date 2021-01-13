import React, { useState ,useRef,useEffect} from 'react';
import './App.css';
import {useMachine} from '@xstate/react'
import clientMachine from './machine'
import Chat from './components/chat/Chat';
import Login from './components/login/Login'

function App() {
const [state,send] = useMachine(clientMachine);
const [message,setMessage] = useState('');
const {socket}:any = state.context;
const messages:any = useState(state.context.messages);
const users:any = useState(state.context.users);
const [username,setUsername] = useState('');

useEffect(()=>{
  //console.log(messages,'@@@@@@@@@@@@@@@@@@@@@');
  console.log(state.context,'APP.tsx');
  
},[])

// const handleLogin = (username:any)=> (send:any)=>{
//   console.log(username ,'@@@@@@@@@@@@@@@@@@@@')
//   send({
//           type:'SUBMIT',
//           payload:username
//   });


  const handleLogin = (username:any)=>{
    setUsername(username);
    send('SUBMIT',{payload:username});
    send('GET_USERS');
    socket.emit('introduceUser',{socket_id:socket.id,username:username});
 
  }

  return (
    
    <div className="app">
    {/* {<Chat socket={socket} messages={messages}></Chat>} */}
    {state.matches('login')?
    (<Login  handleLogin={handleLogin} socket={socket}></Login>):
    <Chat socket={socket} 
          username={username} 
          messages={messages}
          state={state}></Chat>}
    {}
    </div>
  );
}

export default App;
