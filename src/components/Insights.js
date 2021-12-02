import React from 'react'
import styled from 'styled-components'
import test from '../images/iver.png'

const Insights = () => {
  return (
    <>
      <Container>
        <HeadlineContainer>
          <Headline>Einblicke in die Agentur</Headline>
        </HeadlineContainer>
        <img src={test} alt="" />
        <img src={test} alt="" />
        <img src={test} alt="" />
        <img src={test} alt="" />
        <img src={test} alt="" />
        <img src={test} alt="" />
      </Container>
    </>
  )
}

export default Insights

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background: #fff;
  padding-bottom: 1rem;

  img {
    max-width: 18rem;
    margin: 1rem 1.5rem 1.5rem 1.5rem;
  }

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
  font-size: 2rem;
`
