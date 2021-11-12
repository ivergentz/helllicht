import React from 'react'
import styled from 'styled-components'
import test from '../images/iver.png'

const Insights = () => {
  return (
    <>
      <Container>
        <HeaderContainer>
          <Headline>Einblicke in die Agentur</Headline>
        </HeaderContainer>
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

  img {
    max-width: 15rem;
    margin: 1rem;
  }

  @media (min-width: 600px) {
  }
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Headline = styled.h3`
  color: var(--grey);
  font-size: 2rem;
`
