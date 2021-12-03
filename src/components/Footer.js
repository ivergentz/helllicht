import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'
import ButtonElement from './ButtonElement'

const buttontext = 'Hier gehts zu eurem Glück'

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <FooterWidth>
        <FooterSection>
          <h5>Das bin ich</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo et
            animi deleniti minima placeat temporibus earum quos exercitationem
            cumque, assumenda enim possimus fugit amet eaque quae quis quas ab
            est.
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
        </FooterSection>
        <FooterSection>
          <h5>Das bin ich</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo et
            animi deleniti minima placeat temporibus earum quos exercitationem
            cumque, assumenda enim possimus fugit amet eaque quae quis quas ab
            est.
          </p>
        </FooterSection>
        <FooterSection>
          <h5>Das bin ich</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo et
            animi deleniti minima placeat temporibus earum quos exercitationem
            cumque, assumenda enim possimus fugit amet eaque quae quis quas ab
            est.
          </p>
        </FooterSection>

        <ButtonElementEnd>
          <ButtonElement buttonText={buttontext} />
        </ButtonElementEnd>
      </FooterWidth>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: var(--bggrey);
  width: 100%;
  padding-bottom: 3rem;

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (min-width: 769px) {
    background: var(--bggrey);
    flex-wrap: nowrap;
  }
`

const FooterWidth = styled.div`
  color: var(--grey);
  margin: 0 auto;
  max-width: 1100px;
  width: 95%;

  @media (min-width: 769px) {
    display: flex;
  }
`
const FooterSection = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 1rem;

  h5 {
    font-size: 1.2rem;
  }
`

const SocialMedia = styled.section`
  width: 100%;
`

const SocialMediaWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
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
    flex-grow: 1;
  }
`

const SocialIconLink = styled.a`
  color: var(--grey);
  font-size: 24px;
  margin-right: 1.5rem;
`

const ButtonElementEnd = styled.div`
  margin: 3rem;

  @media (min-width: 769px) {
    display: none;
  }
`
