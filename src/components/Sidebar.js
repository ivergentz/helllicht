import React from 'react'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components/macro'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarMenu>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <Logo>i.gentz</Logo>
          <SidebarLink onClick={toggle}>about</SidebarLink>
          <SidebarLink onClick={toggle}>blog</SidebarLink>
          <SidebarLink onClick={toggle}>projects</SidebarLink>
          <SidebarLink onClick={toggle}>contact</SidebarLink>
        </SidebarMenu>
      </SidebarContainer>
    </>
  )
}
export default Sidebar

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: #fff;
  color: var(--grey);
  font-weight: 900;
  display: grid;
  align-items: center;
  left: 0;
  top: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0' : '100%')};
`

const Icon = styled.div`
  top: 1.2rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

const CloseIcon = styled(FaTimes)`
  color: var(--grey);
`

const SidebarLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: var(--yellow);
  cursor: pointer;

  &:hover {
    color: var(--orange);
    transition: 0.2s ease-in-out;
  }
`

const SidebarMenu = styled.ul`
  display: grid;
  margin: 0;
  padding: 0;
  margin-top: -40vh;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

const Logo = styled.div`
  font-weight: 100;
  font-family: 'Shadows Into Light', cursive;
  transform: rotate(-5deg);
  color: var(--grey);
  top: 1.2rem;
  /* left: 1.5rem; */
  font-size: 2rem;
`
