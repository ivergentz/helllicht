import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'
import ButtonElement from './ButtonElement'

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <h5>Das bin ich</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo et animi
          deleniti minima placeat temporibus earum quos exercitationem cumque,
          assumenda enim possimus fugit amet eaque quae quis quas ab est.
        </p>
        <SocialMedia>
          <SocialMediaWrap>
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
      </Column>
      <Column>
        <h5>Das bin ich</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo et animi
          deleniti minima placeat temporibus earum quos exercitationem cumque,
          assumenda enim possimus fugit amet eaque quae quis quas ab est.
        </p>
      </Column>
      <Column>
        <h5>Das bin ich</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo et animi
          deleniti minima placeat temporibus earum quos exercitationem cumque,
          assumenda enim possimus fugit amet eaque quae quis quas ab est.
        </p>
      </Column>
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

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    grid-gap: 1rem;
  }

  h5 {
    font-size: 1.2rem;
    margin: 3rem 0 0.5rem 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 2rem;
  }
`

const SocialMedia = styled.section`
  width: 100%;
`

const SocialMediaWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 85%;
  margin: 0 auto;
  max-width: 1100px;
`

const SocialIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 769px) {
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
  }
`

const SocialIconLink = styled.a`
  color: var(--grey);
  font-size: 24px;
  margin: 0 1rem;
`

const ButtonElementEnd = styled.div`
  margin: 3rem;

  @media (min-width: 769px) {
    display: none;
  }
`

const Column = styled.div`
  @media (min-width: 769px) {
    margin-bottom: 3rem;
    text-align: left;

    h5 {
      margin-left: 2rem;
    }
  }
`
