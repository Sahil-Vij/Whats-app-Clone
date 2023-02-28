import React from 'react'
import ChatContainer from './chatContainer';
import Sidebar from './sidebar';
import './chatPage.css'
function ChatPage({currentUser,signOut}) {
  return (
    <div className='chatpage'>
      <div className='chatpage-container'>
      <Sidebar currentUser={currentUser} signOut={signOut}/>
        <ChatContainer currentUser={currentUser}/>
      </div>
       
    </div>
  )
}

export default ChatPage;