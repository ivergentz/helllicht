import React from 'react'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components/macro'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarMenu>
          <CloseIcon onClick={toggle} />
          <Logo>i.gentz</Logo>
          <MenuItem>about</MenuItem>
          <MenuItem onClick={toggle}>footer</MenuItem>
          <MenuItem onClick={toggle}>projects</MenuItem>
          <MenuItem onClick={toggle}>footer</MenuItem>
          <MenuItem onClick={toggle}>Lebenslauf</MenuItem>
          <MenuItem onClick={toggle}>Zeugnisse</MenuItem>
        </SidebarMenu>
      </SidebarContainer>
    </>
  )
}
export default Sidebar

const SidebarContainer = styled.aside`
  display: grid;
  position: fixed;
  padding-top: 1rem;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: #fff;
  color: var(--grey);
  font-weight: 900;
  left: 0;
  top: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0' : '100%')};
`

const CloseIcon = styled(FaTimes)`
  margin: 0 auto;
  cursor: pointer;
  height: 50px;
`

const SidebarMenu = styled.ul`
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.7rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: var(--orange);
    transition: 0.2s ease-in;
  }
`

const Logo = styled.div`
  font-weight: 100;
  font-family: 'Shadows Into Light', cursive;
  transform: rotate(-5deg);
  color: var(--grey);
  font-size: 2.5rem;
`
