import { React, useEffect, useState } from 'react'
import { Document, Page } from 'react-pdf'
import styled from 'styled-components'

const PdfPage = ({ pdf, Logout }) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    setPageNumber(1)
  }

  const changePage = offset => {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  const previousPage = () => {
    changePage(-1)
  }

  const nextPage = () => {
    changePage(1)
  }

  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    window.scrollY > 150 ? setScrollNav(true) : setScrollNav(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <Container>
      <ButtonContainer onScroll={scrollNav ? changeNav : undefined}>
        <PageOf>
          {pageNumber || (numPages ? 1 : '--')} von {numPages || '--'}
        </PageOf>
        <Button
          type="button"
          disabled={pageNumber === 1}
          onClick={previousPage}
        >
          <p>zurück</p>
        </Button>

        <Button
          type="button"
          disabled={pageNumber === numPages}
          onClick={nextPage}
        >
          <p>weiter</p>
        </Button>
      </ButtonContainer>
      <DocumentContainer>
        <Document
          file={pdf}
          options={{ workerSrc: 'pdf.worker.js' }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </DocumentContainer>
      <button onClick={Logout}>Logout</button>
    </Container>
  )
}

export default PdfPage

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  button {
    display: block;
  }
`

const ButtonContainer = styled.div`
  margin: 0 auto;
  position: fixed;
  display: ${({ onScroll }) => (onScroll ? 'none' : 'flex')};
  flex-direction: row;
  justify-content: space-around;
  min-width: 40%;
  align-items: center;
  padding: 0.5rem;
  z-index: 10;
`

const PageOf = styled.p`
  font-family: 'Shadows Into Light', cursive;
  transform: rotate(-3deg);
  font-size: 0.7rem;
`

const Button = styled.button`
  min-width: 10rem;
  line-height: 1rem;
  margin: 1rem 0;
  padding: 0;
  color: var(--blue);
  border: 0.1rem solid var(--blue);
  background: #fff;
  cursor: pointer;

  p {
    font-size: 0.6rem;
    opacity: ${({ disabled }) => (disabled ? '0.2' : '1')};
    font-family: 'Shadows Into Light', cursive;
    transform: rotate(-3deg);
  }
`

const DocumentContainer = styled.div`
  border: 0.5rem solid var(--orange);
  margin-bottom: 5rem;
`
