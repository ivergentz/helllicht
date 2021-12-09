import React from 'react'
import styled from 'styled-components'

const ButtonElement = ({ buttonText, href }) => {
  return (
    <Button>
      <a href={href}>
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
