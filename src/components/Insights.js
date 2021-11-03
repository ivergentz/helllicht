import React from 'react'
import styled from 'styled-components'
import test from '../images/iver.png'

const Insights = () => {
  return (
    <InsightsContainer>
      <h3>Einblicke in die Agentur</h3>
      <img src={test} alt="" />
      <img src={test} alt="" />
      <img src={test} alt="" />
      <img className="lastimg" src={test} alt="" />
    </InsightsContainer>
  )
}

export default Insights

const InsightsContainer = styled.section`
  margin: 0 auto;
  width: 75%;

  h3 {
    color: var(--grey);
    font-size: 2rem;
  }

  img {
    max-width: 100%;
    margin: 0.5rem 0;
  }

  .lastimg {
    margin-bottom: 2rem;
  }
`
