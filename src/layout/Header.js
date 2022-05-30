import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import styled from 'styled-components'
import { Avatar } from '@mui/material'

function Header() {
  
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
      <SearchIcon />
        <input placeholder='Search youtube'></input>
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
  </HeaderContainer> 
  )
}

export default Header

const HeaderContainer = styled.div`
  background: var(--nav-bg);
  display: flex;
  color: var(--text-color);
  position: fixed;
  justify-content: space-between;
  top:0;
  width: 100%;
  height:60px;
  padding-left:2em;
`
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 0.5em
  }
`
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover{
    opacity: 0.8;
  }
`
const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  align-items: center;
  margin: 1em;
  border: 1px solid var(--color-grey);
  opacity: 0.5;
  border-radius:.5em;
  >.MuiSvgIcon-root{
    margin-left: 2em
  }
  > input{
    background-color: transparent;
    border:none;
    text-align: center;
    margin-left: 0.5em;
    min-width:30vw;
    outline:0;
    color: var(--text-color);
  }
`
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  > .MuiSvgIcon-root {
    margin-left: 2em;
  }
`