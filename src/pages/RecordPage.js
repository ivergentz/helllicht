import React from 'react'
import styled from 'styled-components'
import PdfPage from '../components/PdfPage'
import qualifications from '../media/pdf/qualifications.pdf'

const RecordPage = () => {
  return (
    <Container>
      <PdfPage pdf={qualifications} />
    </Container>
  )
}

export default RecordPage

const Container = styled.section`
  display: flex;
  background: #fff;
  max-width: 1100px;
  padding-top: 9rem;
  justify-content: center;
  margin: 0 auto;
`
