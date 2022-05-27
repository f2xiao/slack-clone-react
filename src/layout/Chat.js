import React from 'react'
import { useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import StarBorderIcon from '@mui/icons-material/StarBorder';



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

        </HeaderRight>
      </Header>

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
const ChatContainer = styledComponents(flexbox)`
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
  text-indent: 0.5em;
}
> .MuiSvgIcon-root {
  margin-left: 0.5em;
}
`
const HeaderRight = styledComponents(flexbox)`
flex: 0.3;
`