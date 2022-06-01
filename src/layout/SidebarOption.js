import React from 'react'

import styled from 'styled-components'
import TagIcon from '@mui/icons-material/Tag';
import AddIcon from '@mui/icons-material/Add';

import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/appSlice';

import { db } from '../firebase.js';
import { collection,  addDoc, doc, getDoc } from "firebase/firestore"; 

function SidebarOption({ Icon, title, addChannelOption, id }) {
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
  const dispatch = useDispatch();
  
  const selectChannel = async() => {
    if (id) {
      const docRef = doc(db, "rooms", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        const { name } = docSnap.data();
        // console.log(name);
        dispatch(enterRoom({
          roomId: id,
          roomName: name
        }))
      } else {
      // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
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
  cursor: pointer;
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
