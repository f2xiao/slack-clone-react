import { Button } from '@mui/material'
import React from 'react'
import styledComponents from 'styled-components'
import { useState } from "react";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from '../firebase.js'; 

function ChatInput({ channelId, channelName }) {
  const [input, setInput] = useState('');
  
  const sendMessage = async (e) => {
    e.preventDefault();
    //TODO - data validation:  input in not empty
    if (!input) {
      return
    }
    const message = {
      message: input,
      user:'Pixie',
      timestamp: serverTimestamp(),
      userImage: 'https://avatars.githubusercontent.com/u/25191617?s=400&u=bda4e2d6456c927b05b8259154bc353056fe75cb&v=4'
    }

    try {
      const docRef = await addDoc(collection(db, 'rooms', channelId, "messages"), message);
      setInput('');
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