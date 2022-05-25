import React from 'react'
import { Box } from '@mui/system'
import styled from 'styled-components'
import TagIcon from '@mui/icons-material/Tag';
import AddIcon from '@mui/icons-material/Add';

function SidebarOption({ Icon, title, addChannelOption }) {
  return (
    <SidebarOptionContainer>
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
