import React from 'react'
import styled from 'styled-components'
import PdfPage from '../components/PdfPage'
import cv01 from '../media/pdf/cv.pdf'

const CvPage = () => {
  return (
    <Container>
      <h4>CV PageContainer</h4>
      <PdfPage pdf={cv01} />
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
