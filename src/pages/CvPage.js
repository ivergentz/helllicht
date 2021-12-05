import React from 'react'
import styled from 'styled-components'
import PdfPage from '../components/PdfPage'
import cv from '../media/pdf/cv.pdf'

const CvPage = () => {
  return (
    <Container>
      <PdfPage pdf={cv} />
    </Container>
  )
}

export default CvPage

const Container = styled.section`
  display: flex;
  background: #fff;
  max-width: 1100px;
  padding-top: 9rem;
  justify-content: center;
  margin: 0 auto;
`
