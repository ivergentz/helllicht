import React from 'react'
import styled from 'styled-components'

const LineElement = () => {
  return <Line />
}

export default LineElement

const Line = styled.hr`
  width: 95%;
  margin: 3rem auto;
  border: 0.5px solid #ccc;

  @media (min-width: 800px) {
    max-width: 750px;
  }
`
