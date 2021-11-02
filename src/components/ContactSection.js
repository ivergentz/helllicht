import React from 'react'
import styled from 'styled-components'
import portrait from '../images/iver.png'
import mail from '../images/mail_grey.png'
import phone from '../images/phone_grey.png'
import LineElement from './LineElement'

const ContactSection = () => {
  return (
    <ContactContainer>
      <Img src={portrait} alt="foto iver gentz" />
      <p>
        <strong>Iver Gentz</strong>
        <br />
        Der neue Typ
      </p>
      <ButtonContainer>
        <Button>
          {' '}
          <img src={phone} alt="" />
          01590 / 6593897
        </Button>
        <Button className="email">
          <img src={mail} alt="" />
          ivergentz@posteo.de
        </Button>
      </ButtonContainer>
      <LineElement />
    </ContactContainer>
  )
}

export default ContactSection

const ContactContainer = styled.section`
  display: block;
  width: 100%;
  text-align: center;
  p {
    margin: 1rem auto;
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 400;
    color: var(--grey);
    margin-bottom: 3rem;
  }
`

const Img = styled.img`
  margin: 0 auto;
  height: 150px;
  width: 150px;
  object-fit: contain;
  border-radius: 200px;
  border: 1px solid var(--grey);
`

const ButtonContainer = styled.div`
  font-size: 1rem;
  color: var(--grey);

  .email {
    color: var(--orange);
  }
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bggrey);
  margin: 1rem auto;
  padding: 0.75rem;
  color: var(--grey);
  width: 85%;

  img {
    width: 2rem;
    height: auto;
    margin-right: 0.25rem;
  }
`
