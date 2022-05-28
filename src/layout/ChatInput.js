import { Button } from '@mui/material'
import React from 'react'
import styledComponents from 'styled-components'


function ChatInput({channelId, channelName}) {
  return (
    <ChatInputContainer>
      <form action="">

      <input placeholder={`Message #${channelName}`}>

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
  }
  > form > input:focus-visible {
    outline:none
  }
`