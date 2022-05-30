import { Avatar } from '@mui/material'
import React from 'react'
import styledComponents from 'styled-components'

function Message({ message, user, timestamp, userImage }) {
  return (
    <MessageContainer>
      <Left>
        <Avatar
          sx={{ width: 48, borderRadius:2, height: 48 }}
          src={userImage}
          alt={user} 
        />
      </Left>
      <Right>
      <h5>{user} <span>{timestamp?.toDate().toLocaleString()}</span></h5>
      <p>{message}</p>
      </Right>
    </MessageContainer>
  )
}

export default Message

const flexbox = styledComponents.div`
  display:flex;
  background:pink;
  
`
const MessageContainer = styledComponents(flexbox)``

const Left = styledComponents(flexbox)`
  align-items:center;
  padding:0.5em;
`
const Right = styledComponents(flexbox)`
  flex-direction:column;
  justify-content:center;
  > h5>span{
    font-weight:normal;
    font-size:0.8em;
    letter-spacing:1px;
    opacity:0.8;
  }
`