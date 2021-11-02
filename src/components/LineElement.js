import React from 'react'
import styled from 'styled-components'

const LineElement = () => {
  return <Line />
}

export default LineElement

const Line = styled.hr`
  width: 85%;
  margin: 5rem auto;
  border: 0.5px solid #ccc;
`
