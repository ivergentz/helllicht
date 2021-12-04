import React from 'react'
import styled from 'styled-components'

const RecordPage = ({ isOpen, toggle }) => {
  return (
    <Container>
      <h1>Record PageContainer</h1>
    </Container>
  )
}

export default RecordPage

const Container = styled.section`
  min-height: 80vh;
  margin-top: 20vh;

  h1 {
    padding: 20vh;
  }
`
