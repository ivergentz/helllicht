import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'
import ButtonElement from './ButtonElement'

const Footer = () => {
  return (
    <FooterContainer>
      <h5 className="center">Das bin ich</h5>
      <p className="center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo et animi
        deleniti minima placeat temporibus earum quos exercitationem cumque,
        assumenda enim possimus fugit amet eaque quae quis quas ab est.
      </p>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo>i.gentz</SocialLogo>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.de"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.de"
              target="_blank"
              aria-label="Instgram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.youtube.de"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.twitter.de"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
      <h5 className="center">Das bin ich</h5>
      <p className="center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo et animi
        deleniti minima placeat temporibus earum quos exercitationem cumque,
        assumenda enim possimus fugit amet eaque quae quis quas ab est.
      </p>
      <ButtonElementEnd>
        <ButtonElement />
      </ButtonElementEnd>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 100%;
  background: var(--bggrey);
  color: var(--grey);
  margin: 2rem 0 0 0;

  .center {
    display: flex;
    justify-content: center;
    width: 85%;
  }

  h5 {
    font-size: 1.2rem;
    margin: 3rem 0 0.5rem 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

const SocialMediaWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 85%;
  margin: 0 auto;
  max-width: 1100px;
  margin: 40px auto 0 auto;
`

const SocialLogo = styled.div`
  width: 100%;
  color: var(--grey);
  font-size: 2rem;
  font-weight: 900;
  margin: -1rem 0 3rem 0;
  font-family: 'Shadows Into Light', cursive;
`

const SocialIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

const SocialIconLink = styled.a`
  color: var(--grey);
  font-size: 24px;
`

const ButtonElementEnd = styled.div`
  margin: 3rem;
`
