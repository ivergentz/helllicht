import React from 'react'
import styled from 'styled-components'
import images from '../media/images/officeImages'

const Insights = () => {
  return (
    <>
      <Container>
        <HeadlineContainer>
          <Headline>Einblicke in die Agentur</Headline>
          {images.map(({ id, src, title, description }) => (
            <Picture key={id} src={src} title={title} alt={description} />
          ))}
        </HeadlineContainer>
      </Container>
    </>
  )
}

export default Insights

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  padding-bottom: 10rem;

  @media (min-width: 600px) {
  }
`

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Headline = styled.h3`
  color: var(--grey);
  font-size: 2.2rem;
  margin-bottom: 3.5rem;
`

const Picture = styled.img`
  display: flex;
  flex-direction: column;
  max-width: 18rem;
  margin: 1rem 1.5rem 1.5rem 1.5rem;
`
