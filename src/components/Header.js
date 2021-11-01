import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <h2>Iver Gentz</h2>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.section`
  display: flex;
  top: 0;
  position: fixed;
  background: #fff;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 2px 0 2px 1px rgba(0, 0, 0, 0.1);
  height: 4rem;
  width: 100%;
  align-items: center;
  z-index: 100;

  h2 {
    margin-left: 3rem;
  }
`
