import React from 'react'
import styled from 'styled-components'
import arrow from '../images/arrow-down-60x100.png'
import thumb from '../images/thumb-down-76x117.png'

const Tasks = () => {
  return (
    <>
      <TasksContainer>
        <h4>Was könnt ihr von mir erwarten? 🤭</h4>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolorem
          unde nostrum quidem numquam laudantium facere exercitationem cumque?
          Facilis modi distinctio assumenda iste rerum aliquid est, quidem
          soluta eligendi obcaecati.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          voluptas consectetur asperiores optio similique qui mollitia et rerum
          dignissimos sunt maiores voluptate blanditiis, praesentium quas ipsum
          debitis atque cupiditate laboriosam!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          vitae nihil soluta, numquam odio aliquam quibusdam inventore nam nemo
          doloribus ea tempora unde aperiam ut. Distinctio, error aut. Cum,
          reiciendis?
        </Text>
        <Statement>Lorem ipsum dolor sit quam praesentium libero.</Statement>
        <Line />
        <h4>Other way around? 🤭</h4>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolorem
          unde nostrum quidem numquam laudantium facere exercitationem cumque?
          Facilis modi distinctio assumenda iste rerum aliquid est, quidem
          soluta eligendi obcaecati.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          voluptas consectetur asperiores optio similique qui mollitia et rerum
          dignissimos sunt maiores voluptate blanditiis, praesentium quas ipsum
          debitis atque cupiditate laboriosam!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          vitae nihil soluta, numquam odio aliquam quibusdam inventore nam nemo
          doloribus ea tempora unde aperiam ut. Distinctio, error aut. Cum,
          reiciendis?
        </Text>
        <Statement className="line">
          Lorem ipsum dolor sit quam praesentium libero. 🤭
        </Statement>
        <img src={arrow} alt="arrow down" />
        <Statement>Auf den Punkt gebracht</Statement>
        <img src={thumb} alt="thumb down" />
        <BoxSection>
          <p>
            <strong>Job</strong>: Webentwickler
            <br />
            <strong>Lorem</strong>: Lorem ipsum dolor sit amet
            <br />
            <strong>Lorem</strong>: Lorem ipsum dolor sit amet
            <br />
            <strong>Lorem</strong>: Lorem ipsum dolor sit amet
            <br />
            <strong>dolor </strong>: Lorem ipsum dolor sit amet
            <br />
            <strong>ipsum</strong>: Lorem ipsum dolor sit amet
          </p>
          <p>
            <strong>Lorem ipsum dolor sit amet, consectetur</strong>: Lorem
            ipsum dolor, s<br />
          </p>
          <p>
            <strong>Zeitraum</strong>: sofort
          </p>
        </BoxSection>
        <Button>
          <a href="mailto:jobs@helllicht.com?subject=Alles klar, ich bin dabei!">
            Jetzt berwerben
          </a>
        </Button>
      </TasksContainer>
    </>
  )
}

export default Tasks

const TasksContainer = styled.section`
  margin: 0 auto;
  margin-bottom: 5rem;
  width: 85%;
  color: var(--grey);

  h4 {
    padding-top: 0.75em;
    margin-bottom: 0.75em;
  }

  .line {
    text-decoration: line-through;
  }

  img {
    display: block;
    margin: 3rem auto;
  }
`

const Text = styled.p`
  text-align: left;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0 0 1.5em;
`

const Statement = styled.p`
  text-align: center;
  font-family: 'Shadows Into Light', cursive;
  margin: 1.5rem 0;
  color: var(--blue);
  padding: 1rem;
  font-size: 2rem;
`

const Line = styled.hr`
  width: 100%;
  margin: 0;
  border: 1px solid #ccc;
`

const BoxSection = styled.div`
  border: 8px solid var(--orange);
  margin: 1.5rem 0;
  margin-bottom: 4rem;
  color: var(--grey);
  padding: 1rem;
  font-size: 3rem;
  text-align: center;

  p {
    margin: 0;
    font-size: 1rem;
    text-align: left;
    margin-bottom: 1.5rem;
  }
`

const Button = styled.div`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;

    color: #fff;
    background: var(--orange);
    padding: 0.75rem 1.5rem;
    color: #fff;
    font-weight: 200;
  }
`
