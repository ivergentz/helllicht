import React from 'react'
import styled from 'styled-components'

const ButtonElement = ({ buttonText }) => {
  return (
    <Button>
      <a href="mailto:jobs@helllicht.com?subject=Alles klar, ich bin dabei!">
        {buttonText}
      </a>
    </Button>
  )
}

export default ButtonElement

const Button = styled.div`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;

    color: #fff;
    background: var(--orange);
    padding: 0.75rem 1.5rem;
    color: #fff;
    font-weight: 200;
  }
`
