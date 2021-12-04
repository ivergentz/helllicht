import React from 'react'
import styled from 'styled-components'

const ButtonElement = ({ buttonText }) => {
  return (
    <Button>
      <a href="mailto:ivergentz@posteo.de?subject=Alles klar, ich bin dabei&body=Das%20muss%20ich%20nochmal%20bearbeiten%0D%0D%20Moin">
        <button>{buttonText}</button>
      </a>
    </Button>
  )
}

export default ButtonElement

const Button = styled.div`
  display: flex;
  justify-content: center;

  button {
    border: 0;
    color: #fff;
    background: var(--orange);
    padding: 0.5rem 1rem;
    margin-left: 3rem;
    font-size: 1.3rem;
    font-weight: 700;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
