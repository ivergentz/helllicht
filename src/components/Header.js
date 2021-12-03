import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll, Link } from 'react-scroll'
import styled from 'styled-components'
import ButtonElement from './ButtonElement'

const Header = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    window.scrollY > 100 ? setScrollNav(true) : setScrollNav(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const buttontext = 'Kontakt'

  return (
    <>
      <HeaderContainer onScroll={scrollNav ? changeNav : undefined}>
        <Logo>
          <h2 onClick={toggleHome}>i.gentz</h2>
        </Logo>
        <MenuItems>
          <MenuItem>
            <Link
              to="footer"
              smooth={true}
              duration={2000}
              spy={true}
              exact="true"
              offset={-80}
            >
              Footer
            </Link>
          </MenuItem>
          <MenuItem>Zeugnisse</MenuItem>
          <Button buttonText={buttontext} />
        </MenuItems>
        <MobileIcon>
          <FaBars onClick={toggle} />
        </MobileIcon>
      </HeaderContainer>
    </>
  )
}

export default Header

const HeaderContainer = styled.section`
  display: flex;
  width: 100vw;
  top: 0;
  position: fixed;
  background: #fff;
  color: var(--grey);
  box-shadow: 2px 0 2px 1px rgba(0, 0, 0, 0.1);
  height: 4rem;
  z-index: 100;
  align-items: center;

  @media (min-width: 800px) {
    box-shadow: ${({ onScroll }) => (onScroll ? '' : 'none')};
    height: ${({ onScroll }) => (onScroll ? '4rem' : '8rem')};
    transition: all 0.5s ease-in;
  }
`

const Logo = styled.div`
  display: flex;
  left: 0;
  cursor: pointer;

  h2 {
    font-family: 'Shadows Into Light', cursive;
    margin-left: 3rem;
    transform: rotate(-5deg);
    justify-content: flex-start;
  }
`

const MobileIcon = styled.div`
  display: flex;
  width: 100%;
  margin-right: 3rem;
  justify-content: flex-end;
  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }
`

const MenuItems = styled.ul`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;

    margin-right: 5rem;
  }
`

const MenuItem = styled.li`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0 1rem;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;

  :hover {
    color: var(--orange);
    transition: all 0.3s ease-out;
  }
`

const Button = styled(ButtonElement)`
  color: blue;
`
