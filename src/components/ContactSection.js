import React from 'react'
import styled from 'styled-components'
import portrait from '../images/iver.png'

const ContactSection = () => {
  return (
    <ContactContainer>
      <Img src={portrait} alt="foto iver gentz" />
      <p>
        <strong>Iver Gentz</strong>
        <br />
        Der neue Typ
      </p>
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
