import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styled from 'styled-components'


function Header() {
  
  return (
    <HeaderContainer>
      <HeaderLeft>left
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>search</HeaderSearch>
      <HeaderRight>right</HeaderRight>
  </HeaderContainer> 
  )
}

export default Header

const HeaderContainer = styled.div`
  background: purple
`
const HeaderLeft = styled.div`
  background: pink
`
const HeaderSearch = styled.div`
`
const HeaderRight = styled.div`
  background: blue
`