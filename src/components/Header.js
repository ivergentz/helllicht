import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import styled from 'styled-components'

const Header = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <HeaderContainer>
      <h2 onClick={toggleHome}>i.gentz</h2>
      <p onClick={toggle}>Menu</p>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  top: 0;
  position: fixed;
  background: #fff;
  color: var(--grey);
  box-shadow: 2px 0 2px 1px rgba(0, 0, 0, 0.1);
  height: 4rem;
  width: 100%;
  align-items: center;
  z-index: 100;

  h2 {
    font-family: 'Shadows Into Light', cursive;
    margin-left: 3rem;
    transform: rotate(-5deg);
  }

  p {
    margin-right: 2rem;
  }
`
