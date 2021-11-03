import React from 'react'
import styled from 'styled-components'
import test from '../images/iver.png'

const Insights = () => {
  return (
    <InsightsContainer>
      <h3>Einblicke in die Agentur</h3>
      <ImgContainer>
        <img src={test} alt="" />
        <img src={test} alt="" />
        <img src={test} alt="" />
        <img src={test} alt="" />
        <img src={test} alt="" />
        <img className="lastimg" src={test} alt="" />
      </ImgContainer>
    </InsightsContainer>
  )
}

export default Insights

const InsightsContainer = styled.section`
  margin: 0 auto;
  text-align: center;
  max-width: 900px;

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

    @media (min-width: 800px) {
      margin-bottom: 1rem;
    }
  }
`

const ImgContainer = styled.div`
  img {
    max-width: 15vw;
    margin: 1rem auto;
    margin-right: 3rem;
    object-fit: cover;
  }
`
