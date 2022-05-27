import React from 'react'
import { useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import ChatInput from './ChatInput.js'

function Chat() {
  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          {/* pass channel name */}
          <h4>#room-name</h4>
          <StarBorderIcon />
        </HeaderLeft>
        <HeaderRight>      
          <InfoIcon />
          <h4>Details</h4>
        </HeaderRight>
      </Header>

      <ChatInput channelId={useSelector(state => state.app.roomId)} />


    </ChatContainer>
    
  )
}

export default Chat
const flexbox = styledComponents.div`
 display:flex;
 flex-direction:row;
 background: var(--chat-bg);
 color:var(--chat-text);
`
const ChatContainer = styledComponents.div`
  padding-top: 60px;
  min-height:calc(100vh - 60px);
  overflow-y:scroll;
  flex:0.7
`
const Header = styledComponents(flexbox)`
  height: 3em;
  width: 100%;
  align-items:center;
`
const HeaderLeft = styledComponents(flexbox)`
flex: 0.7;
>h4 {
  text-indent: 1em;
}
> .MuiSvgIcon-root {
  margin-left: 0.5em;
}
`
const HeaderRight = styledComponents(flexbox)`
flex: 0.3;
justify-content:end;
> .MuiSvgIcon-root {
  margin-right:0.5em;
}
> h4 {
  margin-right:1em;
}
`