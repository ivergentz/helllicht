import React from 'react'
import styled from 'styled-components'
import PdfPage from '../components/PdfPage'
import test from '../media/pdf/cv.pdf'

const RecordPage = () => {
  return (
    <Container>
      <h1>Record PageContainer</h1>
      <PdfPage pdf={test} />
    </Container>
  )
}

export default RecordPage

const Container = styled.section`
  min-height: 80vh;
  margin-top: 20vh;
`
