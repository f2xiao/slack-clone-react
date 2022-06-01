import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import styledComponents from 'styled-components'
import { useState } from "react";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from '../firebase.js'; 
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ channelId, channelName, chatRef }) {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState('');
  useEffect(() => { 
    chatRef.current.scrollIntoView({
      behavior: 'smooth'
    })
   })
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    //TODO - data validation:  input in not empty
    if (!input) {
      return
    }
    const message = {
      message: input,
      user:user.displayName,
      timestamp: serverTimestamp(),
      userImage: user.photoURL
    }

    try {
      const docRef = await addDoc(collection(db, 'rooms', channelId, "messages"), message);
      setInput('');
      console.log(chatRef.current)
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <ChatInputContainer>
      <form onSubmit={sendMessage}>
      <input placeholder={`Message #${channelName}`} value={input} onChange={(e) => { 
    setInput(e.target.value);
  }}>
      </input>
      <Button sx={{display:'none'}}>Submit</Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput
const ChatInputContainer = styledComponents.div`
position:fixed;
  width:55%;
  bottom: 2em;
  right: 4em;
  > form > input {
    display:block;
    height: 4em;
    width: 100%;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline:none;
  }
`