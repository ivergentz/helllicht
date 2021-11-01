import React from 'react'
import styled from 'styled-components'

const JobSection = () => {
  return (
    <SectionContainer>
      <h1>(Werkstudent) Web Development</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
      <BoxSection>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elitLorem ipsum
          dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit
          amet consectetur, adipisicing elit Lorem ipsum dolor sit amet
          consectetur, adipisicing elit
        </p>
      </BoxSection>
    </SectionContainer>
  )
}

export default JobSection

const SectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 8rem 0 0 0;
  justify-content: center;

  h1 {
    color: var(--orange);
    font-weight: 900;
    font-size: 1.1rem;
  }

  h3 {
    padding: 1rem 3rem;
    font-weight: 800;
    line-height: 2.5rem;
    font-size: 2rem;
    color: rgb(51, 51, 51);
    text-align: center;
  }
`
const BoxSection = styled.div`
  border: 8px solid var(--orange);
  font-family: 'Shadows Into Light', cursive;
  width: 90%;
  margin-top: 1.5rem;
  color: rgb(32, 69, 105);
  padding: 1rem;
  font-size: 3rem;
  text-align: center;
`
