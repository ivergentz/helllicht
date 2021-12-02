import React from 'react'
import styled from 'styled-components'

const JobSection = () => {
  return (
    <SectionContainer>
      <h1>(Werkstudent) Web Development</h1>
      <h3>Lorem ipsum dolor sitsitsitsitsitsitsit amet. </h3>
      <BoxSection>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing adipisicing
          adipisicing elitLorem ipsum
        </p>
      </BoxSection>
    </SectionContainer>
  )
}

export default JobSection

const SectionContainer = styled.section`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  margin: 7rem auto 0 auto;
  justify-content: center;
  background: #fff;

  h1 {
    color: var(--orange);
    font-weight: 900;
    font-size: 1.3rem;
  }

  h3 {
    font-weight: 800;
    font-size: 2.5rem;
    color: var(--grey);
    text-align: center;
    margin: 1.5rem 0;
  }
`
const BoxSection = styled.div`
  border: 8px solid var(--orange);
  font-family: 'Shadows Into Light', cursive;
  color: var(--blue);
  padding: 1rem;
  font-size: 3rem;
  text-align: center;
  margin-top: 1.5rem;

  p {
    margin: 0;
    font-size: 2rem;

    @media (min-width: 800px) {
      transform: rotate(-1deg);
    }
  }
`
