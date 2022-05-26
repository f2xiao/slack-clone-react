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
`
const ChatContainer = styledComponents(flexbox)`
  flex:0.7
`
const Header = styledComponents(flexbox)``
const HeaderLeft = styledComponents(flexbox)``
const HeaderRight = styledComponents(flexbox)``