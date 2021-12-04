import React from 'react'
import styled from 'styled-components'

const CvPage = ({ isOpen, toggle }) => {
  return (
    <Container>
      <h1>CV PageContainer</h1>
    </Container>
  )
}

export default CvPage

const Container = styled.section`
  min-height: 80vh;
  margin-top: 20vh;

  h1 {
    padding: 20vh;
  }
`
