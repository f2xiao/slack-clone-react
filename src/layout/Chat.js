import React from 'react'
import { useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import ChatInput from './ChatInput.js';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase.js';
import Message from './Message.js';

function Chat() {
  const channelId = useSelector(state => state.app.roomId);
  const channelName = useSelector(state => state.app.roomName);
  const [roomMessages, loading, error] = useCollection(channelId && collection(db, 'rooms',channelId,'messages'));
  return (
    <>
      {channelId &&
      <ChatContainer>
        <Header>
          <HeaderLeft>
          {/* pass channel name */}
            <h4>#{channelName}</h4>
            <StarBorderIcon />
          </HeaderLeft>
          <HeaderRight>      
            <InfoIcon />
            <h4>Details</h4>
          </HeaderRight>
        </Header>
        <ChatMessages>
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Collection: Loading...</span>}
          {
            roomMessages?.docs.map((doc) => {
              const { message, user, timestamp, userImage } = doc.data();
              return (
                <Message
                  id={doc.id}
                  key={doc.id}
                  message={message}
                  user={user}
                  timestamp={timestamp}
                  userImage={userImage} />
                )})
          }
        </ChatMessages>
        <ChatInput channelId={channelId} channelName={channelName} />
      </ChatContainer>
      }
    </>
  )
}

export default Chat
const flexbox = styledComponents.div`
 display:flex;
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

const ChatMessages = styledComponents(flexbox)`
  background:yellow;
  flex-direction: column;
`