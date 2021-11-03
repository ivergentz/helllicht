import React from 'react'
import styled from 'styled-components'

const StatementElement = ({ className, text }) => {
  return <Statement className={className}>{text}</Statement>
}

export default StatementElement

const Statement = styled.div`
  text-align: center;
  font-family: 'Shadows Into Light', cursive;
  margin: 1.5rem 0;
  color: var(--blue);
  padding: 1rem;
  font-size: 2rem;

  @media (min-width: 800px) {
    transform: rotate(-1deg);
  }
`
