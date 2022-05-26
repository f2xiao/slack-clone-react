import React from 'react'
import { Box } from '@mui/system'
import styled from 'styled-components'
import TagIcon from '@mui/icons-material/Tag';
import AddIcon from '@mui/icons-material/Add';
import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 

function SidebarOption({ Icon, title, addChannelOption }) {
  const addChannel = async () => {
    let channelName = prompt("Please enter a new channel name");
    if (channelName) {
      try {
        const docRef = await addDoc(collection(db, "rooms"), {
          name: channelName
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }
  const selectChannel = () => {
    alert('select a channel')
  }
  return (
    <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel }>
      {Icon && <Icon />}
      {Icon ? <h4>{title}</h4> :
        <SidebarOptionChannel>
          {addChannelOption ? <AddIcon /> : <TagIcon />}
          <h4>{title}</h4>
        </SidebarOptionChannel>}
    </SidebarOptionContainer>
  )
}

export default SidebarOption
const SidebarOptionChannel = styled.div`
  display: flex;
  > h4{
    font-weight:normal
  }
  > .MuiSvgIcon-root {
    margin-right: 0.5em;
  }
`
const SidebarOptionContainer = styled(SidebarOptionChannel)`
  padding:1em;
`
